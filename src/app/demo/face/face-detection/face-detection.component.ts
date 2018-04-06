import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSelectedEvent } from '../../vision/vision.component';
import { FaceViewerComponent } from '../face-viewer/face-viewer.component';
import { IFace } from '../../../cognitive-services/models/face.models';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { FaceDataService } from '../../../cognitive-services/face-data.service';
import { environment } from '../../../../environments/environment';
import { CognitiveServicesComponent } from '../../cognitive-services.component';

@Component({
    selector: 'app-face-detection',
    templateUrl: './face-detection.component.html',
    styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent extends CognitiveServicesComponent implements OnInit {
    @ViewChild(FaceViewerComponent) viewerComponent: FaceViewerComponent;

    imageList: Array<string>;
    selectedImagePath: string;
    faces: Array<IFace> = [];
    apiTitle = 'Facial Recognition API';
    apiDescription = 'Detect human faces and compare similar ones, organize people into groups according to visual similarity, and identify previously tagged people in images.';

    public constructor(private titleService: Title,
        private faceDataService: FaceDataService) {
        super();
        this.titleService.setTitle('Face Detection');
    }

    ngOnInit() {
        this.imageList = environment.faceImageUrls;
        this.selectImage(this.imageList[0]);
        this.viewerComponent.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePath = e.imagePath;
        });
    }

    selectImage(imagePath: string) {
        this.errorMessage = '';
        this.viewerComponent.selectStockImage(imagePath);
    }

    onFaceDetected(faceViewerId: string, faces: Array<IFace>) {
        this.faces = faces;
    }

    onError(errorMessage: string) {
        this.errorMessage = errorMessage;
    }
}
