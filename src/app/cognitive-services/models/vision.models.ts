export interface IPoint {
    x: number;
    y: number;
}

export interface IRectangle {
    left: number;
    top: number;
    width: number;
    height: number;
}

export interface IRotation {
    roll: number;
    yaw: number;
    pitch: number;
}

export interface IImageFeatures {
    categories: Array<{ name: string, score: number, detail: any }>;
    adult: {
        isAdultContent: boolean;
        isRacyContent: boolean;
        adultScore: number;
        racyScore: number;
    };
    tags: Array<{ name: string, confidence: number }>;
    description: {
        tags: Array<string>;
        captions: Array<{ text: string, confidence: number }>;
    };
    requestId: string;
    metadata: {
        width: number;
        height: number;
        format: string;
    };
    faces: Array<{ age: number, gender: string, faceRectangle: IRectangle }>;
    color: {
        dominantColorForeground: string;
        dominantColorBackground: string;
        dominantColors: Array<string>;
        accentColor: string;
        isBWImg: boolean;
    };
    imageType: {
        clipArtType: number;
        lineDrawingType: number;
    };
}

export interface IOcrResult {
    language: string;
    textAngle: number;
    orientation: string;
    regions: IOcrRegion[];
}

export interface IOcrRegion {
    boundingBox: string;
    lines: IOcrLine[];
}

export interface IOcrLine {
    boundingBox: string;
    words: IOcrWord[];
}

export interface IOcrWord {
    boundingBox: string;
    text: string;
}

