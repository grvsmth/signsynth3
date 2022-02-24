const formUtil = {
    "makeSelect": function(name, ascsto) {
	const options = ascsto.menuText[name];
	const selectDiv = document.createElement("div");

	const labelElement = document.createElement("label");
	labelElement.htmlFor = name;
	labelElement.innerHTML = ascsto.param[name];

	const select = document.createElement("select");
	select.name = name;
	select.id = name;

	for(const option in options) {
	    const defaultSelected = option === ascsto.defaultValue[name];
	    const optionObject = new Option(options[option], option, defaultSelected, defaultSelected);
	    select.add(optionObject);
	}

	selectDiv.append(labelElement);
	selectDiv.append(select);

	return selectDiv;
    },
    "articulator": function(signerHanded, holdParam) {
	if (holdParam.startsWith("dominant")) {
	    return signerHanded;
	}

	// TODO nonmanuals

	if (signerHanded === "right") {
	    return "left";
	}

	return "right";
    }
};


formUtil.processRotation = function(articulator, joint, targetName, rotation, rotations) {
    let actualRotation = rotation;
    if ("copy" in rotation) {
	actualRotation = rotations[rotation.copy];
    }

    return {
	"articulator": articulator,
	"joint": joint,
	"targetName": targetName,
	"rotation": actualRotation
    };
};

formUtil.findRotations = function(signerHanded, rotations, param, value) {
    const targetRotations = [];

    const articulator = formUtil.articulator(signerHanded, param);

    for (const joint in rotations[articulator]) {
	for (const targetName in rotations[articulator][joint]) {
	    if (targetName === value) {
		const rotation = rotations[articulator][joint][targetName];
		const target = formUtil
		      .processRotation(articulator,
				       joint,
				       targetName,
				       rotation,
				       rotations[articulator][joint]);
		targetRotations.push(target);
	    }
	}
    }

    return targetRotations;
};

export default formUtil;
