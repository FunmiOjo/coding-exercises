"use strict"

function listToArray(list) {
	if (!list.next) {
		return [list.value];
	}
	return [list.value].concat(listToArray(list.next));
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

console.log(listToArray(list1));
console.log(listToArray(list2));
