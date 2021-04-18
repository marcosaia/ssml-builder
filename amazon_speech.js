"use strict";

const Speech = require('./index')

class AmazonSpeech extends Speech {
    constructor() {
        super();
        this._elements = [];
    }
    whisper(words, shouldEscape = true) {
        this._notEmpty(words, "The words provided to AmazonSpeech#whisper(..) was '" + words + "'");
        var escapedWords = shouldEscape ? this._escape(words) : words;
        this._elements.push("<amazon:effect name=\"whispered\">" + escapedWords + "</amazon:effect>");
        return this;
    }
    voice(voiceName, words, shouldEscape = true) {
        this._notEmpty(words, "The words provided to AmazonSpeech#voice(..) was '" + words + "'");
        var escapedWords = shouldEscape ? this._escape(words) : words;
        this._elements.push("<voice name='" + voiceName + "'>" + escapedWords + "</voice>");
        return this;
    }
}

module.exports = AmazonSpeech;
