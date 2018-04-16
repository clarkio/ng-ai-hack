import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import { SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { IImageFeatures, IOcrResult } from './models/vision.models';

@Injectable()
export class VisionDataService extends DataService {

    private key = environment.apiKeys.computerVision;

    analyze(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IImageFeatures> {
        const url = `${this.apiServer}/vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,ImageType,Color,Adult`;

        if (typeof imageUrlOrData === 'string') {
            const body = { url: imageUrlOrData };
            return this.post<IImageFeatures>(url, body, this.key);
        } else {
            return this.postBinaryData<IImageFeatures>(url, <ArrayBuffer>imageUrlOrData, this.key);
        }
    }

    ocr(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IOcrResult> {
        const url = `${this.apiServer}/vision/v1.0/ocr`;

        if (typeof imageUrlOrData === 'string') {
            const body = { url: imageUrlOrData };
            return this.post<IOcrResult>(url, body, this.key);
        } else {
            return this.postBinaryData<IOcrResult>(url, <ArrayBuffer>imageUrlOrData, this.key);
        }
    }
}
