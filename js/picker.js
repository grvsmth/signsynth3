const param = {
    "location-letter": "location",
    "handshape-letter": "handshape",
    "orientation-letter": "orientation"
};

const exports = {
    "listener": function(event) {
        let letterParam = "location";
        for (let className in param) {
            if (event.target.classList.contains(className)) {
                letterParam = param[className];
                break;
            }
        }
        console.log("picker click: " + letterParam, event.target.innerText);
    }
};

exports.addListener = function(pickerLetter) {
    pickerLetter.addEventListener("click", exports.listener);
}

export default exports;
