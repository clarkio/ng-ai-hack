import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CognitiveServicesComponent } from './cognitive-services.component';
import { VisionComponent } from './vision/vision.component';
import { EmotionRecognitionComponent } from './emotion/emotion-recognition.component';
import { HeroBannerComponent } from './shared/hero-banner/hero-banner.component';
import { DemoRoutingModule } from './demo-routing.module';
import { CognitiveServicesModule } from '../cognitive-services/cognitive-services.module';
import { FaceViewerComponent } from './face/face-viewer/face-viewer.component';
import { FaceDetectionComponent } from './face/face-detection/face-detection.component';
import { FaceVerificationComponent } from './face/face-verification/face-verification.component';
import { ComputerVisionReadTextComponent } from './computer-vision/computer-vision-read-text/computer-vision-read-text.component';
import { ComputerVisionAnalyzeImageComponent } from './computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component';
import { TextAnalysisComponent } from './text/text-analysis/text-analysis.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CognitiveServicesModule,
        DemoRoutingModule
    ],
    declarations: [
        EmotionRecognitionComponent,
        FaceViewerComponent,
        FaceDetectionComponent,
        FaceVerificationComponent,
        HeroBannerComponent,
        ComputerVisionReadTextComponent,
        ComputerVisionAnalyzeImageComponent,
        TextAnalysisComponent
    ],
    providers: [
        Title
    ]
})
export class DemoModule { }
