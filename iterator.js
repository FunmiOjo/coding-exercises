var createIterator = function(func, n) {	
	return function(value) {
		var result = value;
		for (var i = 0; i < n; i++) {
			result = func(result);
		}
		return result;
	};
};

function getDouble(value) {
	return value * 2;
}

var doubleIterator = createIterator(getDouble, 2);
console.log(doubleIterator(3));
