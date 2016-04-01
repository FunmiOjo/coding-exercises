"use strict";
//returns maximum of sum any contiguous subarray in given array of numbers
//returns 0 if all numbers are negative or empty

function maxSequence(arr) {
	
	if (arr.length === 0) {
		return 0;
	}
	
	var positiveNums = arr.filter(elem => elem > -1);
	
	if (positiveNums.length === 0) {
		return 0;
	}
	 
	if (positiveNums === arr) {
		return arr.reduce((prev, curr) => prev + curr);
	}
	
	
	function getPossibleSums(index) {
		var sums = [];
		for (var i = index + 1; i < arr.length + 1; i++) {
			sums.push(arr.slice(index, i)
			.reduce((prev, curr) => prev + curr));
			
		}
		
		for (i = 0; i < index; i++) {
			sums.push(arr.slice(i, index + 1)
			.reduce((prev, curr) => prev + curr));
			
		}
		
		return sums;
	}


	var allSums = [];
	
	for (var i = 0; i < positiveNums.length; i++) {
		allSums = allSums.concat(getPossibleSums(arr.indexOf(positiveNums[i])));
	}
	
	return Math.max.apply(null, allSums);	
}

//run this for all positive numbers' indexes
	


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
