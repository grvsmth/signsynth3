import Hold from "./Hold.js";
import StokoeWord from "./StokoeWord.js";

const lexer = moo.compile({
    "WS":      /[ \t]+/,
    "handshape": /[358ABCEFGHIKLORVWXY]/,
    "location": /[cuhijmlspQ\[\-_\|]/,
    "movement": /[abegnorwxz=+:.~‖\]#@\(\)]+/,
    "orientation": /[\^fvt<>]|&gt;|&lt;/,
    "modifier": ["`", "&quot;", "\""],
    "NL":      { "match": /\n/, "lineBreaks": true },
    "unidentified": /./
});

const holdsPerMovement = {
    "r": 5,
    "z": 5,
    "=": 5,
    "a": 2,
    "w": 5,
    "]": 2,
    "e": 5,
    "b": 2,
    "n": 5,
    "#": 2,
    "@": 5,
    ")": 2,
    "g": 2,
    "o": 2,
    "(": 2,
    "x": 1,
    "+": 1,
    ":": 2,
    ".": 1,
    "~": 5,
    "‖": 1
};

const exports = {
    "extractStokoeWords": function(text) {
        let words = [];
        let word = new StokoeWord();

        lexer.reset(text);
        for (let token of lexer) {
            console.log(token);
            if (token.type === "handshape") {
                word.setHandshape(token.text);
                continue;
            }

            if (token.type === "location") {
                word.setLocation(token.text);
                continue;
            }

            if  (token.type === "orientation") {
                word.setOrientation(token.text);
                continue;
            }

            if (token.type === "modifier") {
                word.setModifier(token.text);
                continue;
            }

            if (token.type === "movement") {
                word.setMovement(token.text);
                continue;
            }

            if (token.type === "WS" || token.type === "NL") {
                words.push(word);
                word = new StokoeWord();
            }
        }

        if (word.getDominantHandshape() !== "") {
            words.push(word);
        }

        return words;
    },
    "wordToHolds": function(word, index, words) {
        const hold = new Hold();

        const movements = word.getMovement();

        if (holdsPerMovement[movements] === 1) {
            hold.setDominantHandshape(word.getDominantHandshape());
            hold.setLocation(word.getLocation());
            hold.setDominantOrientation(word.getDominantOrientation());
        }

        return hold;
    }
};

exports.wordsToHolds = function(words) {
    return words.map(exports.wordToHolds);
};

export default exports;
