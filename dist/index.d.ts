export = Speech;
/**
 * This class helps simplify using SSML (Speech Synthesis Markup Language).
 * This only supports a subset of SSML tags which the Alexa device supports.
 * An example of how to use this class.
 * <code>
 *  var speech = new Speech();
 *  speech.say("Let's begin your lesson");
 *  speech.pause("1s");
 *
 * </code>
 * Implement a method for <phoneme/>, <w/>, <say-as> All done
 * interpret-as="cardinal|ordinal|digits|fraction|unit|date|time|telephone|address" + format="mdy|dmy|ymd|md|dm|ym|my|d|m|y" All done
 * @constructor
 */
declare class Speech {
    _elements: any[];
    _helper: Helper;
    /**
     * This appends raw text into the <speak/> tag.
     * @param saying The raw text to insert into the speak tag.
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    say(saying: any, shouldEscape?: boolean): Speech;
    /**
     * Creates and inserts a paragraph tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#p
     * @param paragraph The paragraph of text to insert.
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    paragraph(paragraph: any, shouldEscape?: boolean): Speech;
    /**
     * Creates and inserts a sentence tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#s
     * @param saying The sentence to insert.
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    sentence(saying: any, shouldEscape?: boolean): Speech;
    /**
     * Creates and inserts a break tag. This method will also validate the break time conforms to the restrictions to Amazon Alexa.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#break
     * @param duration the duration represented by a number + either 's' for second or 'ms' for milliseconds.
     * @returns {Speech}
     */
    pause(duration: any): Speech;
    /**
     * Creates a break tag that will pause the audio based upon the strength provided.
     * For more information, please see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#break
     * @param strength such as none, x-weak, weak, medium, strong, x-strong
     * @returns {Speech}
     */
    pauseByStrength(strength: any): Speech;
    /**
     * Creates and inserts an audio tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#audio
     * @param url a link to an audio file to play.
     * @param callback - an optional callback which is called to build the nested SSML
     *                   for the audio tag. The callback takes a single parameter of type
     *                   Speech.
     * @returns {Speech}
     */
    audio(url: any, callback: any): Speech;
    /**
     * Creates and inserts a say-as tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#say-as
     * @param word word or text to insert
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    spell(word: any, shouldEscape?: boolean): Speech;
    /**
     * Creates and inserts a say-as tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#say-as
     * @param word word or text to insert , delay the delay represented by a number + either 's' for second or 'ms' for milliseconds.
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    spellSlowly(word: any, delay: any, shouldEscape?: boolean): Speech;
    /**
     * This constructs an object that the AlexaSkill.js accepts to send to the user.
     * @returns {{type: string, speech}}
     */
    toObject(): {
        type: string;
        speech;
    };
    /**
     * This method will construct an SSML xml string.
     * @param excludeSpeakTag when true, no root tag <speak/> is provided; otherwise,
     *        the content is surrounded by the <speak/>, default is false
     * @returns {string} An XML string.
     */
    ssml(excludeSpeakTag: any): string;
    /**
     * Validates that the provided value is not null or undefined. It will throw an exception if it's either.
     * @param value The value to check.
     * @param msg The error message stating that exception.
     * @private
     */
    private _present;
    /**
     * This validates that a duration is in the correct format and doesn't exceed the
     * maximum duration of 10 seconds or 10000 milliseconds.
     *
     * The expected format is a positive number followed by 's' for second or 'ms' for milliseconds.
     *
     * @param duration The duration of a pause.
     * @throws an exception when the duration doesn't conform to the proper format or duration length.
     * @private
     */
    private _validateDuration;
    /**
     * Creates and inserts a say-as tag that has multiple attributes such as interpret-as and format
     * interpret-as="characters|spell-out|cardinal|number|ordinal|digits|fraction|unit|date|time|telephone|address|interjection|expletive" + format="mdy|dmy|ymd|md|dm|ym|my|d|m|y"
     *
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#say-as
     * @param options an object that has three properties: word, interpret and format
     * word being the text to insert, interpret represents the attribute interpret-as and format represents the attribute format
     * @returns {Speech}
     */
    sayAs(options: any): Speech;
    /**
     * Creates and inserts a w tag that customizes the pronunciation of words by specifying the word’s part of speech
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#w
     * @param options an object that has two properties: word and role
     * word being the text to insert and role represents the part of speech
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    partOfSpeech(options: any, shouldEscape?: boolean): Speech;
    /**
     * Creates and inserts a phoneme tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#phoneme
     * @param alphabet, ph, word
     * alphabet i.e "ipa"
     * @param ph i.e "pɪˈkɑːn"
     * @param word being the text to insert
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    phoneme(alphabet: any, ph: any, word: any, shouldEscape?: boolean): Speech;
    /**
     * This method escapes any special characters that will cause SSML to be invalid.
     * @param word being the text to insert
     * @returns {*}
     * @private
     */
    private _escape;
    /**
     * This method ensures the input passing in is not null, undefined or empty string. In the case that it is, an exception is thrown with the message provided.
     * @param word
     * @param msg
     * @private
     */
    private _notEmpty;
    /**
     * Ensures 'fnc' is a function.
     * @param fnc the variable to check if it's a function.
     * @param name the name of the parameter used in the error message.
     */
    _isFunction(fnc: any, name: any): void;
    /**
     * Creates and inserts a emphasis tag.
     * see https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#emphasis
     * @param level includes strong, moderate and reduced
     * @param word word or text to insert
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    emphasis(level: any, word: any, shouldEscape?: boolean): Speech;
    /**
     * √ TODO: Handle rate minimum 20%
     * @param attributes
     * @param word
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    prosody(attributes: any, word: any, shouldEscape?: boolean): Speech;
    /**
     * This method lets the user provide an alias and pronounce the specified word or pharse as a different word or phrase
     * @param alias is the word that you want to pronounce instead of the original word
     * @param word the original word
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    sub(alias: any, word: any, shouldEscape?: boolean): Speech;
    /**
     * This method lets the user add raw SSML into the speech object without escaping the special characters.
     * For example, if you passed in "<speak>Hi</speak>", it won't escape the less than or greater than tags.
     * @param saying raw string to be appended
     * @returns {Speech}
     */
    sayWithSSML(saying: any): Speech;
    /**
     * This method will select a random word or phrase from the choices provided and then say it to the user
     * @param choices - an array of phrases or words
     * @param shouldEscape true if the raw text should be escaped, false otherwise (default=true)
     * @returns {Speech}
     */
    sayRandomChoice(choices: any, shouldEscape?: boolean): Speech;
}
import Helper = require("./helper");
