import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IFace } from '../../../cognitive-services/models/face.models';
import { VisionComponent } from '../../vision/vision.component';
import { FaceDataService } from '../../../cognitive-services/face-data.service';

@Component({
    selector: 'app-face-viewer',
    templateUrl: './face-viewer.component.html'
})
export class FaceViewerComponent extends VisionComponent implements OnInit {
    @Output() faceDetecting = new EventEmitter();
    @Output() faceDetected = new EventEmitter<Array<IFace>>();
    @Output() faceError = new EventEmitter<string>();

    isFaceLandmarksEnabled = true;
    faces: Array<IFace> = [];
    faceLandmarks: Array<any> = [];

    constructor(protected sanitizer: DomSanitizer, private faceDataService: FaceDataService) {
        super(sanitizer);
    }

    ngOnInit() {
        this.isLoading = true;
        this.onInternetUrlSelected();
    }

    clearFaceLandmarks(): void {
        this.faceLandmarks = [];
    }

    toggleFaceLandmarks(): void {
        this.isFaceLandmarksEnabled = !this.isFaceLandmarksEnabled;
    }

    refreshDetection() {
        this.clearFaces();
        this.errorMessage = '';
        this.clearFaceLandmarks();

        this.faceDetecting.emit();

        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        } else {
            this.isLoading = true;
            this.faceDataService.detect(this.selectedImageUrl)
                .then(faces => {
                    this.faces = faces;
                    this.isLoading = false;
                    this.processFaces();
                })
                .catch((error) => {
                    this.errorMessage = error;
                    this.isLoading = false;
                    this.faceError.emit(this.errorMessage);
                });
        }
    }

    processFile(result: any) {
        this.isLoading = true;
        this.clearFaceLandmarks();
        this.faceDataService.detect(result)
            .then(faces => {
                this.faces = faces;
                this.isLoading = false;
                this.processFaces();
            })
            .catch((error) => {
                this.errorMessage = error;
                this.isLoading = false;
                this.faceError.emit(this.errorMessage);
            });
    }

    onResize() {
        this.clearFaces();
        this.clearFaceLandmarks();
        this.processFaces();
    }

    private processFaces() {
        if (!this.selectedImage) {
            return;
        }

        if (this.faces) {
            this.faces.forEach(face => {
                this.faceIds.push(face.faceId);
                this.faceRectangles.push(this.processFaceRectangle(face.faceRectangle));

                for (const faceLandmark in face.faceLandmarks) {
                    if (face.faceLandmarks.hasOwnProperty(faceLandmark)) {
                        const faceLandmarkStyle = {
                            percentTop: (face.faceLandmarks[faceLandmark].y * this.imagePosition.scale + this.selectedImage.offsetTop) /
                                        this.imagePosition.container.clientHeight * 100,
                            percentLeft: (face.faceLandmarks[faceLandmark].x * this.imagePosition.scale + this.selectedImage.offsetLeft) /
                                        this.imagePosition.container.clientWidth * 100
                        };
                        this.faceLandmarks.push({
                            name: faceLandmark,
                            style: faceLandmarkStyle
                        });
                    }
                }
            });

            this.faceDetected.emit(this.faces);
        }
    }
}
