function solution(roman) {

	var numerals = { 
		"M": { 
			value: 1000,
			subtractsFrom: []
		}, 
		"D": { 
			value: 500,
			subtractsFrom: []
		},
		"C": { 
			value: 100,
			subtractsFrom: ["D", "M"]
		},
		"L": { 
			value: 50,
			subtractsFrom: []
		},
		"X": { 
			value: 10,
			subtractsFrom: ["L", "C"]
		},
		"V": { 
			value: 5,
			subtractsFrom: []
		},
		"I": { 
			value: 1,
			subtractsFrom: ["V", "X"]
		}
	};
	
	var result = 0;
	
	for (var i = 0; i < roman.length; i++) {
		if ((roman[i + 1]) && 
		(numerals[roman[i]].subtractsFrom.indexOf(roman[i + 1]) !== -1)) {
			result = result + (numerals[roman[i]].value * -1);
		}
		else {
			result = result + numerals[roman[i]].value;
		}
	}
	
	return result;
 }
 
console.log(solution("XXI"));
