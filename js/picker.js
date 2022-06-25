const param = {
    "location-letter": "location",
    "handshape-letter": "handshape",
    "orientation-letter": "orientation"
};

const ignoreKeys = ["Alt",
                    "ArrowDown",
                    "ArrowLeft",
                    "ArrowRight",
                    "ArrowUp",
                    "CapsLock",
                    "Control",
                    "End",
                    "Escape",
                    "Home",
                    "Insert",
                    "Meta",
                    "PageDown",
                    "PageUp",
                    "Shift",
                    "Tab"];

const exports = {
    "append": function(addition) {
        document.querySelector("#ascsto-output").append(addition);
    },
    "appendElement": function(element, addition) {
        const additionalElement = document.createElement(element);
        additionalElement.innerText = addition;

        document.querySelector("#ascsto-output").appendChild(additionalElement
                                                            );
    },
    "copyListener": function() {
        const outputElement = document.querySelector("#ascsto-output");
        navigator.clipboard.writeText(outputElement.innerText);
    },
    "copyHtmlListener": function() {
        const outputElement = document.querySelector("#ascsto-output");
        const outputHtml = outputElement.innerHTML;

        let htmlItem;

        try {
            const htmlBlob = new Blob([outputHtml], {"type": "text/html"});
            htmlItem = new ClipboardItem({"text/html": htmlBlob});
        } catch(error) {
            console.log("Can't create clipboardItem!", error);
        }

        navigator.clipboard.write([htmlItem]).catch((error) => {
            console.log("Failed to copy HTML", error);
        });
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

exports.addLetter = function(letter) {
    const charFormatElement = document.forms["format-form"]
          .elements["char-format"];

    if (charFormatElement.value === "superscript") {
        exports.appendElement("sup", letter);
        charFormatElement.value = "none";
        return;
    }

    if (charFormatElement.value === "subscript") {
        exports.appendElement("sub", letter);
        charFormatElement.value = "none";
        return;
    }

    exports.append(letter);
};

exports.letterListener = function(event) {
    if (event.type === "click") {
        exports.addLetter(event.target.innerText);
        return;
    }

    if (ignoreKeys.includes(event.key)) {
        return;
    }

    if (event.key.length > 1) {
        if (event.key.substring(0,1) === "F") {
            return;
        }

        if (event.key === "Backspace" || event.key === "Delete") {
            exports.backspaceListener();
            return;
        }
    }

    if (event.ctrlKey) {
        if (event.shiftKey) {
            if (event.key === "x") {
                exports.copyHtmlListener();
                exports.clearListener();
                return;
            }

            if (event.key === "c") {
                exports.copyHtmlListener();
                return;
            }

            if (event.key === "+") {
                event.preventDefault();
                const charFormatElement = document.forms["format-form"]
                      .elements["char-format"];
                charFormatElement.value = "superscript";
                return;
            }
        }

        if (event.key === "x") {
            exports.copyListener();
            exports.clearListener();
            return;
        }

        if (event.key === "c") {
            exports.copyListener();
            return;
        }

        if (event.key === "=") {
            event.preventDefault();
            const charFormatElement = document.forms["format-form"]
                  .elements["char-format"];
            charFormatElement.value = "subscript";
            return;
        }

        // Paste is a big deal because we have to sanitize it
        return;
    }

    if (event.altKey) {
        return;
    }

    exports.addLetter(event.key);
};

exports.addListener = function(pickerLetter) {
    pickerLetter.addEventListener("click", exports.letterListener);
};

export default exports;
