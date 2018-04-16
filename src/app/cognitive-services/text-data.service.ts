import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { ISentiment, ILanguageDetect, ILanguageKeyPhrase } from './models/text.models';

@Injectable()
export class TextDataService extends DataService {

    private key = environment.apiKeys.textAnalytics;

    analyzeSentiment(text: string): Promise<ISentiment> {
        const url = `${this.apiServer}/text/analytics/v2.0/sentiment`;
        const body = { documents: [{ id: '1', text: text }] };
        return this.post<ISentiment>(url, body, this.key);
    }

    analyzeLanguage(text: string): Promise<ILanguageDetect> {
        const url = `${this.apiServer}/text/analytics/v2.0/languages`;
        const body = { documents: [{ id: '1', numberOfLanguagesToDetect: '1', text: text }] };
        return this.post<ILanguageDetect>(url, body, this.key);
    }

    analyzeKeyPhrases(text: string, language: string ): Promise<ILanguageKeyPhrase> {
        const url = `${this.apiServer}/text/analytics/v2.0/keyPhrases`;
        const body = { documents: [{ id: '1', text: text, language: language }] };
        return this.post<ILanguageKeyPhrase>(url, body, this.key);
    }
}
