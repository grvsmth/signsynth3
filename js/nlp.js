const lexer = moo.compile({
    "WS":      /[ \t]+/,
    "handshape": /[358ABCEFGHIKLORVWXY]/,
    "location": /[cuhijmlspQ\[\-_\|]/,
    "movement": /[abegnorwxz=+:.~‖\]#@\(\)]/,
    "orientation": /[\^fvt<>]|&gt;|&lt;/,
    "modifier": ["`", "&quot;"],
    "NL":      { "match": /\n/, "lineBreaks": true },
    "unidentified": /./
});

const exports = {
    "extractStokoeWords": function(text) {
        lexer.reset(text);
        for (let token of lexer) {
            console.log(token);
        }
    }
};

export default exports;
