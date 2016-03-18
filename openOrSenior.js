function openOrSenior(data) {
	var i;
	var output = [];
	for (i = 0; i < data.length; i++) {
		if (data[i][0] >= 55 && data[i][1] > 7) {
			output.push("Senior");
		}
		else {
			output.push("Open");
		}
	}
	return output;
}
