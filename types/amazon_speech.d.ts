export = AmazonSpeech;
declare class AmazonSpeech extends Speech {
    whisper(words: any, shouldEscape?: boolean): AmazonSpeech;
    voice(voiceName: any, words: any, shouldEscape?: boolean): AmazonSpeech;
}
import Speech = require("./index");
