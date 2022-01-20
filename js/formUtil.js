const formUtil = {
    "makeSelect": function(name, label, options, defaultOption) {
	const selectDiv = document.createElement("div");

	const labelElement = document.createElement("label");
	labelElement.htmlFor = name;
	labelElement.innerHTML = label;

	const select = document.createElement("select");
	select.name = name;
	select.id = name;

	for(const option in options) {
	    const defaultSelected = option === defaultOption;
	    select.add(new Option(options[option], option, defaultSelected));
	}

	selectDiv.append(labelElement);
	selectDiv.append(select);

	return select;
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

    console.log("rotations", rotations);
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
