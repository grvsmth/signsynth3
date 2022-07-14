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


formUtil.findRotation = function(articulator, joint, targetName, rotation, rotations) {
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
                      .findRotation(articulator,
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

formUtil.rotationsForHold = function(signerHanded, rotations, output, hold) {
    for (const param in hold) {
        const articulator = formUtil.articulator(signerHanded, param);
        for (const joint in rotations[articulator]) {
            for (const targetName in rotations[articulator][joint]) {
                if (targetName === hold[param]) {
                    const rotation = rotations[articulator][joint][targetName];
                    const target = formUtil
                          .findRotation(articulator,
                                        joint,
                                        targetName,
                                        rotation,
                                        rotations[articulator][joint]);
                    if (!output[articulator].hasOwnProperty(joint)) {
                        output[articulator][joint] = [];
                    }
                    output[articulator][joint].push(target);
                }
            }
        }
    }
};

formUtil.holdsToRotations = function(signerHanded, rotations, holds) {
    const output = {"left": {}, "right": {}};
    for (const hold of holds) {
        formUtil.rotationsForHold(signerHanded, rotations, output, hold);
    }
    return output;
};

export default formUtil;
