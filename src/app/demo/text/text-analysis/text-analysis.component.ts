import { Component, OnInit, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CognitiveServicesComponent } from '../../cognitive-services.component';
import { ISentiment, ILanguageDetect, ILanguageKeyPhrase } from '../../../cognitive-services/models/text.models';
import { TextDataService } from '../../../cognitive-services/text-data.service';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent extends CognitiveServicesComponent implements OnInit {
  sentiment: ISentiment;
  languageDetect: ILanguageDetect;
  languageKeyPhrases: ILanguageKeyPhrase;
  analysisText = '';
  sampleEnglishPositiveText = 'I had a wonderful experience! The rooms were wonderful and the staff were helpful.';
  sampleEnglishNegativeText = 'I had a terrible time at the hotel. The staff were rude and the food was awful.';
  sampleSpanishPositiveText = 'Los caminos que llevan hasta Monte Rainier son espectaculares y hermosos.';
  sampleSpanishNegativeText = 'La carretera estaba atascada. Había mucho tráfico el día de ayer.';
  textToAnalyze = '';
  detectedLanguageISOName = '';
  detectedLanguage = '';
  keyPhrases: Array<{ phrase: string }>;

  showJSON = false;
  apiTitle = 'Text Analytics API';
  apiDescription = 'Detect sentiment, key phrases, topics, and language from your text.';

  public constructor(private titleService: Title,
    private textDataService: TextDataService) {
    super();
    this.titleService.setTitle('Text Analytics');
  }

  ngOnInit() {
    this.textToAnalyze = this.sampleEnglishPositiveText;
    this.isLoading = false;
  }

  public analyzeText() {
    this.refreshDetection();
  }

  public insertEnglishPositiveText() {
    this.textToAnalyze = this.sampleEnglishPositiveText;
    this.refreshDetection();
  }

  public insertEnglishNegativeText() {
    this.textToAnalyze = this.sampleEnglishNegativeText;
    this.refreshDetection();
  }

  public insertSpanishPositiveText() {
    this.textToAnalyze = this.sampleSpanishPositiveText;
    this.refreshDetection();
  }

  public insertSpanishNegativeText() {
    this.textToAnalyze = this.sampleSpanishNegativeText;
    this.refreshDetection();
  }

  public toggleJSON(b: boolean) {
    this.showJSON = b;
  }

  public score() {
    return this.sentiment && this.sentiment.documents.length > 0 ?
      (Math.round(this.sentiment.documents[0].score * 100)).toString() + '%' : '';
  }

  private refreshDetection() {
    this.sentiment = null;
    this.isLoading = true;

    this.analysisText = '';
    this.detectedLanguageISOName = '';
    this.detectedLanguage = '';

    if (this.textToAnalyze.trim().length === 0) {
      this.errorMessage = 'Enter text to analyze';
      this.isLoading = false;
      this.analysisText = '';
    } else {
      this.textDataService.analyzeSentiment(this.textToAnalyze)
        .then(sentiment => {
          this.sentiment = sentiment;
        })
        .catch((error) => {
          this.errorMessage = error;
          this.isLoading = false;
          return;
        });

      this.textDataService.analyzeLanguage(this.textToAnalyze)
        .then(languageDetect => {
          this.languageDetect = languageDetect;

          if (this.languageDetect.documents.length > 0) {
            if (this.languageDetect.documents[0].detectedLanguages.length > 0) {
              this.detectedLanguageISOName = this.languageDetect.documents[0].detectedLanguages[0].iso6391Name;
              this.detectedLanguage = this.languageDetect.documents[0].detectedLanguages[0].name;

              this.textDataService.analyzeKeyPhrases(this.textToAnalyze, this.detectedLanguageISOName)
                .then(languageKeyPhrases => {
                  this.languageKeyPhrases = languageKeyPhrases;
                  this.keyPhrases = languageKeyPhrases.documents[0].keyPhrases;
                })
                .catch((error) => {
                  this.errorMessage = error;
                  this.isLoading = false;
                  return;
                });
            }
          }
        })
        .catch((error) => {
          this.errorMessage = error;
          this.isLoading = false;
          return;
        });

      this.isLoading = false;
    }
  }
}
