"use strict";

//convert to array
//filter with regex
//map replacing numbers with ASCII - 100
//join with space
function alphabetPosition(text) {
	return text.split("").filter(function(element) {
		return /[A-Za-z]/.test(element) === true;
	}).map(function (element) {
		return element.toUpperCase().charCodeAt(0) - 64;
	}).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log(alphabetPosition("The narwhal bacons at midnight.") === "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
console.log(alphabetPosition("ABCabc"));
console.log(/A-Za-z/.test("["));


