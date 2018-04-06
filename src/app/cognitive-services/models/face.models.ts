import { IPoint, IRectangle } from './vision.models';

export class ImagePair {
    image1: string;
    image2: string;
}

export interface IFaceVerification {
    isIdentical: boolean;
    confidence: number;
}

export interface IFaceLandmarks {
    pupilLeft: IPoint;
    pupilRight: IPoint;
    noseTip: IPoint;
    mouthLeft: IPoint;
    mouthRight: IPoint;
    eyebrowLeftOuter: IPoint;
    eyebrowLeftInner: IPoint;
    eyebrowRightInner: IPoint;
    eyebrowRightOuter: IPoint;
    eyeLeftOuter: IPoint;
    eyeLeftTop: IPoint;
    eyeLeftBottom: IPoint;
    eyeLeftInner: IPoint;
    eyeRightInner: IPoint;
    eyeRightTop: IPoint;
    eyeRightBottom: IPoint;
    eyeRightOuter: IPoint;
    noseRootLeft: IPoint;
    noseRootRight: IPoint;
    noseLeftAlarTop: IPoint;
    noseRightAlarTop: IPoint;
    noseLeftAlarOutTip: IPoint;
    noseRightAlarOutTip: IPoint;
    upperLipTop: IPoint;
    upperLipBottom: IPoint;
    underLipTop: IPoint;
    underLipBottom: IPoint;
}

export interface IFaceAttributes {
    age: number;
    gender: string;
    smile: number;
    facialHair: {
        mustache: number;
        beard: number;
        sideburns: number;
    };
    glasses: string;
    headPose: IRotation;
    emotion: IEmotionScore;
}

export interface IEmotionScore {
    anger: number;
    contempt: number;
    disgust: number;
    fear: number;
    happiness: number;
    neutral: number;
    sadness: number;
    surprise: number;
}

export interface IRotation {
    roll: number;
    yaw: number;
    pitch: number;
}

export interface IFace {
    faceId: string;
    faceRectangle: IRectangle;
    faceLandmarks?: IFaceLandmarks;
    faceAttributes?: IFaceAttributes;
}

export interface IEmotion {
    faceRectangle: IRectangle;
    scores: IEmotionScore;
}
