import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { VisionComponent } from '../../vision/vision.component';
import { VisionDataService } from '../../../cognitive-services/vision-data.service';
import { environment } from '../../../../environments/environment';
import { IImageFeatures } from '../../../cognitive-services/models/vision.models';

@Component({
  selector: 'app-computer-vision-analyze-image',
  templateUrl: './computer-vision-analyze-image.component.html',
  styleUrls: ['./computer-vision-analyze-image.component.css']
})
export class ComputerVisionAnalyzeImageComponent extends VisionComponent implements OnInit {
    errorMessage = '';
    imageFeatures: IImageFeatures;
    showJSON = false;
    apiTitle = 'Computer Vision API - Analyze Image';
    apiDescription = 'Extract rich information from images to categorize and process visual data—and protect your users from unwanted content.';

    constructor(protected sanitizer: DomSanitizer, private titleService: Title,
      private visionDataService: VisionDataService) {
      super(sanitizer);
      this.titleService.setTitle('Analyze Image');
  }

    ngOnInit() {
        this.isLoading = true;
        this.imageList = environment.objectImageUrls;
        this.internetImageUrl = environment.objectImageUrls[0];
        this.onInternetUrlSelected();
    }

    bestDescription() {
        if (!this.imageFeatures || !this.imageFeatures.description) {
            return null;
        }
        return this.imageFeatures.description.captions.reduce((prev, current) => {
            return (prev.confidence > current.confidence) ? prev : current;
        });
    }

    highConfidenceTags() {
        return this.imageFeatures.tags.filter(tag => {
            return tag.confidence >= 0.5;
        }).map(tag => {
            return tag.name;
        }).join(', ');
    }

    lowConfidenceTags() {
        return this.imageFeatures.tags.filter(tag => {
            return tag.confidence < 0.5;
        }).map(tag => {
            return tag.name;
        }).join(', ');
    }

    toggleJSON(b: boolean) {
        this.showJSON = b;
    }

    onResize() {
        this.clearFaces();
        this.processFaces();
    }

    refreshDetection() {
        this.clearFaces();
        this.errorMessage = '';

        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        } else {
            this.isLoading = true;
            this.visionDataService.analyze(this.selectedImageUrl)
                .then(imageFeatures => {
                    this.imageFeatures = imageFeatures;
                    this.isLoading = false;
                    this.processFaces();
                })
                .catch((error) => {
                    this.errorMessage = error;
                    this.isLoading = false;
                });
        }
    }

    processFile(result: any) {
        this.isLoading = true;
        this.visionDataService.analyze(result)
            .then(imageFeatures => {
                this.imageFeatures = imageFeatures;
                this.isLoading = false;
                this.processFaces();
            })
            .catch((error) => {
                this.errorMessage = error;
                this.isLoading = false;
            });
    }

    private processFaces() {
        if (!this.selectedImage) {
            return;
        }

        if (this.imageFeatures.faces) {
            this.imageFeatures.faces.forEach(face => {
                this.faceRectangles.push(this.processFaceRectangle(face.faceRectangle));
            });
        }
    }
}

