const formUtil = {
    "makeOption": function() {

    }
};

formUtil.makeSelect = function(name, label, options, defaultOption) {
    const selectDiv = document.createElement("div");

    const labelElement = document.createElement("label");
    label.htmlFor = name;
    label.innerHTML = label;

    const select = document.createElement("select");
    select.name = name;
    select.id = name;

    for(const option in options) {
	const defaultSelected = option === defaultOption;
	select.add(new Option(options[option], option, defaultSelected));
    }

    selectDiv.add(labelElement);
    selectDiv.add(select);

    return select;
};

export default formUtil;
