const param = {
    "location-letter": "location",
    "handshape-letter": "handshape",
    "orientation-letter": "orientation"
};

const exports = {
    "listener": function(event) {
        const outputElement = document.querySelector("#ascsto-output");

        let letterParam = "location";
        for (let className in param) {
            if (event.target.classList.contains(className)) {
                letterParam = param[className];
                break;
            }
        }
        const outputSpan = document.createElement("span");

        const outputClass = letterParam + "-output";
        outputSpan.classList.add(outputClass, "stokoe");

        if (letterParam === "orientation") {
            const outputSub = document.createElement("sub");
            outputSub.innerText = event.target.innerText;
            outputSpan.appendChild(outputSub);
        } else {
            outputSpan.innerText = event.target.innerText;
        }

        outputElement.appendChild(outputSpan);
    }
};

exports.addListener = function(pickerLetter) {
    pickerLetter.addEventListener("click", exports.listener);
}

export default exports;
