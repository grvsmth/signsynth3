import Hold from "./Hold.js";
import StokoeWord from "./StokoeWord.js";

let lexer;

if (typeof moo !== "undefined") {
    lexer = moo.compile({
        "WS":      /[ \t]+/,
        "handshape": /[358ABCEFGHIKLORVWXY]/,
        "location": /[cuhijmlspQ\[\-_\|]/,
        "movement": /[abegnorwxz=+:.~‖\]#@\(\)]+/,
        "orientation": /[\^fvt<>]|&gt;|&lt;/,
        "modifier": ["`", "&quot;", "\""],
        "NL":      { "match": /\n/, "lineBreaks": true },
        "unidentified": /./
    });
}

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

        if (!lexer) {
            return words;
        }

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
    "wordToHold": function(word) {
        const hold = new Hold();

        const dominantHandshape = word.getDominantHandshape();
        if (dominantHandshape && dominantHandshape !== "") {
            hold.setDominantHandshape(dominantHandshape);
        }

        const nonDominantHandshape = word.getNonDominantHandshape();
        if (nonDominantHandshape && nonDominantHandshape !== "") {
            hold.setNonDominantHandshape(nonDominantHandshape);
        }

        const location = word.getLocation();
        if (location && location !== "") {
            hold.setDominantLocation(location);

            if (nonDominantHandshape && nonDominantHandshape !== "") {
                hold.setNonDominantLocation(location);
            }
        }

        const dominantOrientation = word.getDominantOrientation();
        if (dominantOrientation && dominantOrientation !== "") {
            hold.setDominantOrientation(dominantOrientation);
        }

        const nonDominantOrientation = word.getNonDominantOrientation();
        if (nonDominantOrientation && nonDominantOrientation !== "") {
            hold.setNonDominantOrientation(nonDominantOrientation);
        }

        return hold;
    }
};

exports.wordToHolds = function(holds, word) {
    const movements = word.getMovement();

    if (movements.length > 1) {
        console.log(`Complex movement: ${movements.length} components`);
    } else {
        const currentHolds = holdsPerMovement[movements];
        if (currentHolds > 1) {
            console.log(`This movement has ${currentHolds} holds`);
        }
    }
    holds.push(exports.wordToHold(word));

    return holds;
};


exports.wordsToHolds = function(words) {
    const holds = [];
    return words.reduce(exports.wordToHolds, holds);
};

export default exports;
