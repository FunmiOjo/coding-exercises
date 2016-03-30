function list(names) {
	if (names.length === 0) {
		return "";
	}

	if (names.length === 1) {
		return names[0].name;
	}

	else {
		console.log(names.length);
		var result = "";
		var i;
		for (i = 0; i < names.length; i++) {
			if (i === names.length - 1) {
				result = result.concat("& " + names[i].name);
				continue;
			}
			if (i === names.length - 2) {
				result = result.concat(names[i].name + " ");
				continue;
			}
			else {
				result = result.concat(names[i].name + ", ");
			}
		}
		return result;
	}
}

console.log(list([{name: "Homer"}, {name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}]));
