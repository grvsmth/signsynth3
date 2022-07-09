import StokoeWord from "./StokoeWord.js";

const lexer = moo.compile({
    "WS":      /[ \t]+/,
    "handshape": /[358ABCEFGHIKLORVWXY]/,
    "location": /[cuhijmlspQ\[\-_\|]/,
    "movement": /[abegnorwxz=+:.~‖\]#@\(\)]/,
    "orientation": /[\^fvt<>]|&gt;|&lt;/,
    "modifier": ["`", "&quot;", "\""],
    "NL":      { "match": /\n/, "lineBreaks": true },
    "unidentified": /./
});

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
    }
};

export default exports;
