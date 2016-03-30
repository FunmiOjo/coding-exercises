function addScore(diceNumber) {
	if (diceNumber.length === 0 || diceNumber === undefined) {
		return 0;
	}
	
	if ([2, 3, 4, 6, 7].indexOf(diceNumber[0]) !== -1) {
		if (diceNumber.length < 3) {
			return 0;
		}
		else {
			return diceNumber[0] * 100 * (Math.trunc(diceNumber.length / 3));
		}
	}
	
	if (diceNumber[0] === 5) {
		if (diceNumber.length < 3) {
			return diceNumber[0] * 10 * diceNumber.length;
		}
		else {
			return diceNumber[0] * 100 * (Math.trunc(diceNumber.length / 3)) + 
			diceNumber[0] * 10 * (diceNumber.length % 3);
		}
	}
	
	if (diceNumber[0] === 1) {
		 if (diceNumber.length < 3) {
			return diceNumber[0] * 100 * diceNumber.length;
		}
		else {
			return diceNumber[0] * 1000 * (Math.trunc(diceNumber.length / 3)) + 
			diceNumber[0] * 100 * (diceNumber.length % 3);
		}
	}
}
//Array -> Number
////Produces a score based on the values in the given dice roll

console.log(score([2, 3, 4, 6, 2]) === 0);
console.log(score([4, 4, 4, 3, 3]) === 400);
console.log(score([2, 4, 4, 5, 4]) === 450);
console.log(score([2, 4, 1, 1, 1, 1]) === 1100);
console.log(score([2, 2, 2, 1, 7, 6]));
//console.log(score([3, 3, 3]));
//console.log(addScore([7]));

function score(dice) {
	var one = dice.filter(function(element) {
		return element === 1;
	});
	var two = dice.filter(function(element) {
		return element === 2;
	});
	var three = dice.filter(function(element) {
		return element === 3;
	});
	var four = dice.filter(function(element) {
		return element === 4;
	});
	
	var five = dice.filter(function(element) {
		return element === 5;
	});
	var six = dice.filter(function(element) {
		return element === 6;
	});
	var seven = dice.filter(function(element) {
		return element === 7;
	});
	
	return addScore(one) + addScore(two) + addScore(three) + addScore(four) + addScore(five) + 
	addScore(six) + addScore(seven);
}
