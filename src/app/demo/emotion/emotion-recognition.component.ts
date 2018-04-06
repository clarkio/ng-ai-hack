import { Component, OnInit, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { VisionComponent } from '../vision/vision.component';
import { environment } from '../../../environments/environment';
import { IEmotion } from '../../cognitive-services/models/face.models';
import { FaceDataService } from '../../cognitive-services/face-data.service';

@Component({
    selector: 'app-emotion-recognition',
    templateUrl: './emotion-recognition.component.html',
    styleUrls: ['./emotion-recognition.component.css']
})
export class EmotionRecognitionComponent extends VisionComponent implements OnInit {
    emotions: Array<IEmotion>;
    apiTitle = 'Emotion Recognition API';
    apiDescription = 'Analyze faces to detect a range of feelings and personalize your app\'s responses.';

    public constructor(protected sanitizer: DomSanitizer, private titleService: Title,
        private faceDataService: FaceDataService) {
        super(sanitizer);
        this.titleService.setTitle('Emotion Recognition');
    }

    ngOnInit() {
        this.imageList = environment.emotionImageUrls;
        this.internetImageUrl = this.imageList[0];
        this.onInternetUrlSelected();
    }

    topEmotion(index: number) {
        try {
            const emotion = this.emotions[index];
            let maxValue = 0;
            let maxKey = '';
            for (const prop in emotion.scores) {
                if (emotion.scores.hasOwnProperty(prop)) {
                    if (emotion.scores[prop] > maxValue) {
                        maxValue = emotion.scores[prop];
                        maxKey = prop;
                    }
                }
            }
            return maxKey;
        } catch (err) {
            return '';
        }
    }

    emotionColor(emotionName: string, opaque: boolean) {
        const opacity = opaque ? '1' : '.3';
        switch (emotionName) {
            case 'anger': return `rgba(255,0,0,${opacity})`;
            case 'contempt': return `rgba(233,150,122,${opacity})`;
            case 'disgust': return `rgba(153,50,204,${opacity})`;
            case 'fear': return `rgba(0,0,0,${opacity})`;
            case 'happiness': return `rgba(255,215,0,${opacity})`;
            case 'neutral': return `rgba(128,128,128,${opacity})`;
            case 'sadness': return `rgba(65,105,225,${opacity})`;
            case 'surprise': return `rgba(255,69,0,${opacity})`;
        }
        return `rgba(255,255,255,${opacity})`;
    }

    refreshDetection() {
        this.clearFaces();
        this.errorMessage = '';

        if (!this.isLoading) {

            if (!this.selectedImageUrl) {
                this.errorMessage = 'Please provide a valid URL';
            } else {
                this.isLoading = true;
                this.faceDataService.detectEmotion(this.selectedImageUrl)
                    .then(faces => {
                        this.parseResult(faces);
                    })
                    .catch((error) => {
                        this.errorMessage = error;
                        this.isLoading = false;
                    });
            }
        }
    }

    processFile(result: any) {
        this.isLoading = true;
        this.faceDataService.detectEmotion(result)
        .then(faces => {
            this.parseResult(faces);
        })
        .catch((error) => {
            this.errorMessage = error;
            this.isLoading = false;
        });
    }

    onResize() {
        this.clearFaces();
        this.processFaces();
    }

    private parseResult(faces) {
        this.emotions = [];
        faces.forEach(face => {
            this.emotions.push({
                faceRectangle: face.faceRectangle,
                scores: face.faceAttributes.emotion
            });
        });
        this.isLoading = false;
        this.processFaces();
    }

    private processFaces(): void {
        if (!this.selectedImage) {
            return;
        }
        (this.emotions || []).forEach(emotion => {
            this.faceRectangles.push(this.processFaceRectangle(emotion.faceRectangle));
        });
    }
}
