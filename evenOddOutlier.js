"use strict"
function findOutlier(integers) {
	var firstThree = integers.slice(0, 3);
	
	
	var evenOfFirstThree = firstThree.filter(function(element) {
		return element % 2 === 0;
	});
	
	if (evenOfFirstThree.length === 1) {
		return evenOfFirstThree[0];
	}
	
	if (evenOfFirstThree.length === 2) {
		return firstThree.findIndex(function(element) {
			return element % 2 !== 0;
		});
	}
	
	if (evenOfFirstThree.length === 3) {
		return integers.find(function(element) {
			return element % 2 !== 0;
		});
	}
	
	if (evenOfFirstThree.length === 0) {
		return integers.find(function(element) {
			return element % 2 == 0;
		});
	}
}


console.log(findOutlier([0,0,3,0,0]));
