export = AmazonSpeech;
declare class AmazonSpeech {
    _elements: any[];
    whisper(words: any, shouldEscape?: boolean): AmazonSpeech;
    voice(voiceName: any, words: any, shouldEscape?: boolean): AmazonSpeech;
}
