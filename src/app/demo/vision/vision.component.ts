import { Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CognitiveServicesComponent } from '../cognitive-services.component';
import { IRectangle } from '../../cognitive-services/models/vision.models';

export class ImageSelectedEvent {
    imagePath: string;
}

export abstract class VisionComponent extends CognitiveServicesComponent {
    @Output() imageSelected = new EventEmitter<ImageSelectedEvent>();

    selectedImage: HTMLImageElement;
    imagePosition: {
        container: HTMLElement;
        scale: number;
    };
    imageList: Array<string>;
    selectedImageUrl: SafeResourceUrl;
    internetImageUrl: string;
    faceRectangles: Array<any> = [];
    faceIds: Array<string> = [];

    constructor(protected sanitizer: DomSanitizer) {
        super();
    }

    // Implement these in child classes
    protected abstract refreshDetection(): void;
    protected abstract processFile(result: any): void;

    clearFaces(): void {
        this.faceRectangles = [];
    }

    onInternetUrlSelected(): void {
        this.errorMessage = '';
        this.selectedImageUrl = this.internetImageUrl;
        this.imageSelected.emit({ imagePath: this.internetImageUrl });
        this.refreshDetection();
    }

    selectStockImage(imagePath: string) {
        if (!this.isLoading) {
            this.errorMessage = '';
            this.selectedImageUrl = imagePath;
            this.internetImageUrl = imagePath;
            this.imageSelected.emit({ imagePath: this.internetImageUrl });
            this.refreshDetection();
        }
    }

    onFilesSelected(event: Event): void {
        this.errorMessage = '';
        const file = (<HTMLInputElement>event.target).files[0];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

        this.selectedImageUrl = url;
        this.internetImageUrl = '';
        this.clearFaces();

        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.processFile(fileReader.result);
        };

        fileReader.readAsArrayBuffer(file);
        (<HTMLInputElement>event.target).value = '';
    }

    onFilesClicked(event: Event): void {
        (<HTMLInputElement>event.target).value = '';
    }

    selectedImageLoaded(event: Event) {
        this.selectedImage = <HTMLImageElement>event.target;
        this.imagePosition = {
            container: this.selectedImage.parentElement,
            scale: this.selectedImage.width / this.selectedImage.naturalWidth
        };
    }

    protected processFaceRectangle(faceRectangle: IRectangle) {
        const top = (faceRectangle.top * this.imagePosition.scale + this.selectedImage.offsetTop) /
                        this.imagePosition.container.clientHeight * 100;
        const left = (faceRectangle.left * this.imagePosition.scale + this.selectedImage.offsetLeft) /
                        this.imagePosition.container.clientWidth * 100;
        const width = (faceRectangle.width * this.imagePosition.scale) /
                        this.imagePosition.container.clientWidth * 100;
        const height = (faceRectangle.height * this.imagePosition.scale) /
                        this.imagePosition.container.clientHeight * 100;

        const faceRectangleStyle = {
            percentTop: top,
            percentLeft: left,
            percentWidth: width,
            percentHeight: height
        };

        return faceRectangleStyle;
    }
}
