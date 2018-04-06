export interface ISentiment {
    documents: Array<{ score: number, id: string }>;
    errors: Array<any>;
}

export interface ILanguageDetect {
    documents: Array<{
        id: string;
        detectedLanguages: Array<{
            name: string;
            iso6391Name: string;
            score: number;
        }>;
    }>;
    errors: Array<any>;
}

export interface ILanguageKeyPhrase {
    documents: Array<{
        id: string;
        keyPhrases: Array<{
            phrase: string;
        }>;
    }>;
    errors: Array<any>;
}
