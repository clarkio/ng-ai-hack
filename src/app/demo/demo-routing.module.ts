import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmotionRecognitionComponent } from './emotion/emotion-recognition.component';
import { FaceDetectionComponent } from './face/face-detection/face-detection.component';
import { FaceVerificationComponent } from './face/face-verification/face-verification.component';
import { ComputerVisionReadTextComponent } from './computer-vision/computer-vision-read-text/computer-vision-read-text.component';
import { ComputerVisionAnalyzeImageComponent } from './computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component';
import { TextAnalysisComponent } from './text/text-analysis/text-analysis.component';

const routes: Routes = [
    {
        path: 'demo',
        children: [
            {
                path: 'emotion-recognition',
                component: EmotionRecognitionComponent
            },
            {
                path: 'face-detection',
                component: FaceDetectionComponent
            },
            {
                path: 'face-verification',
                component: FaceVerificationComponent
            },
            {
                path: 'analyze-image',
                component: ComputerVisionAnalyzeImageComponent
            },
            {
                path: 'read-text',
                component: ComputerVisionReadTextComponent
            },
            {
                path: 'analyze-text',
                component: TextAnalysisComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
