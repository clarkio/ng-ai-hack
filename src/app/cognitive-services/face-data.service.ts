import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { IRectangle } from './models/vision.models';
import { IFace, IFaceVerification } from './models/face.models';

@Injectable()
export class FaceDataService extends DataService {

    private key = environment.subscriptionKeys.face;

    detect(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IFace[]> {
        const url = `${this.apiServer}/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,smile,facialHair,headPose,glasses`;

        if (typeof imageUrlOrData === 'string') {
            const body = { url: imageUrlOrData };
            return this.post<IFace[]>(url, body, this.key);
        } else {
            return this.postBinaryData<IFace[]>(url, <ArrayBuffer>imageUrlOrData, this.key);
        }
    }

    detectEmotion(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IFace[]> {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        const url = `${this.apiServer}/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion`;

        if (typeof imageUrlOrData === 'string') {
            const body = { url: imageUrlOrData };
            return this.post<IFace[]>(url, body, this.key);
        } else {
            return this.postBinaryData<IFace[]>(url, <ArrayBuffer>imageUrlOrData, this.key);
        }
    }

    verify(faceId1: string, faceId2: string) {
        // Verify whether two faces belong to a same person or whether one face belongs to a person.
        const url = `${this.apiServer}/face/v1.0/verify`;

        const body = { faceId1: faceId1, faceId2: faceId2 };

        return this.post<IFaceVerification>(url, body, this.key);
    }
}
