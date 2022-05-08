const param = {
    "location-letter": "location",
    "handshape-letter": "handshape",
    "orientation-letter": "orientation"
};

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

        navigator.clipboard.write([htmlItem]).then(() => {
            console.log("Successfully copied HTML");
        }, (error) => {
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

exports.letterListener = function(event) {
    const charFormatElement = document.forms["format-form"]
          .elements["char-format"];

    if (charFormatElement.value === "superscript") {
        exports.appendElement("sup", event.target.innerText);
        charFormatElement.value = "none";
        return;
    }

    if (charFormatElement.value === "subscript") {
        exports.appendElement("sub", event.target.innerText);
        charFormatElement.value = "none";
        return;
    }

    exports.append(event.target.innerText);
};

exports.addListener = function(pickerLetter) {
    pickerLetter.addEventListener("click", exports.letterListener);
}

export default exports;
