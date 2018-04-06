import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { VisionComponent } from '../../vision/vision.component';
import { IOcrResult } from '../../../cognitive-services/models/vision.models';
import { VisionDataService } from '../../../cognitive-services/vision-data.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-computer-vision-read-text',
    templateUrl: './computer-vision-read-text.component.html',
    styleUrls: ['./computer-vision-read-text.component.css']
})
export class ComputerVisionReadTextComponent extends VisionComponent implements OnInit {
    isLoading = true;
    errorMessage = '';
    showJSON = false;
    textResult: string;
    ocrResult: IOcrResult;
    apiTitle = 'Computer Vision API - Read Text';
    apiDescription = 'Extract rich information from images to categorize and process visual data—and protect your users from unwanted content.';

    constructor(protected sanitizer: DomSanitizer, private titleService: Title,
      private visionDataService: VisionDataService) {
      super(sanitizer);
      this.titleService.setTitle('Read Text');
  }

    ngOnInit() {
        this.imageList = environment.textImageUrls;
        this.internetImageUrl = environment.textImageUrls[0];
        this.onInternetUrlSelected();
    }

    toggleJSON(b: boolean) {
        this.showJSON = b;
    }

    refreshDetection() {
        this.errorMessage = '';

        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        } else {
            this.isLoading = true;
            this.visionDataService.ocr(this.selectedImageUrl)
                .then(ocrResult => {
                    this.processResult(ocrResult);
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errorMessage = error;
                    this.isLoading = false;
                });
        }
    }

    processFile(result: any) {
        this.isLoading = true;
        this.visionDataService.ocr(result)
            .then(ocrResult => {
                this.processResult(ocrResult);
                this.isLoading = false;
            })
            .catch((error) => {
                this.errorMessage = error;
                this.isLoading = false;
            });
    }

    processResult(result: IOcrResult) {
        let plainText = '';
        if (result.regions != null) {
            for (let i = 0; i < result.regions.length; i++) {
                for (let j = 0; j < result.regions[i].lines.length; j++) {
                    for (let k = 0; k < result.regions[i].lines[j].words.length; k++) {
                        plainText += result.regions[i].lines[j].words[k].text + ' ';
                    }
                    plainText += '\n';
                }
                plainText += '\n';
            }
        } else {
            plainText += 'empty.';
        }

        this.textResult = plainText;
        this.ocrResult = result;
    }
}
