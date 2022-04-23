const param = {
    "location-letter": "location",
    "handshape-letter": "handshape",
    "orientation-letter": "orientation"
};

const exports = {
    "append": function(addition) {
        document.querySelector("#ascsto-output").append(addition);
    },
    "copyListener": function() {
        const outputElement = document.querySelector("#ascsto-output");
        navigator.clipboard.writeText(outputElement.innerText);
    },
    "clearListener": function() {
        document.querySelector("#ascsto-output").innerHTML = "";
    },
    "backspaceListener": function() {
        const outputElement = document.querySelector("#ascsto-output");
        outputElement.removeChild(outputElement.lastChild);
    }
};

exports.spaceListener = function() {
    exports.append(" ");
};

exports.letterListener = function(event) {
    exports.append(event.target.innerText);
};

exports.addListener = function(pickerLetter) {
    pickerLetter.addEventListener("click", exports.letterListener);
}

export default exports;
