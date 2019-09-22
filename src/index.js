function eval() {
	// Do not use eval!!!
	return;
}

function expressionCalculator(expr) {

	const arrString = expr.trim().split(''),
		bracketOne = arrString.filter(symbol => symbol === '(').length,
		bracketTwo = arrString.filter(symbol => symbol ===')').length;

	if (checkLeftBrackets !== checkRightBrackets) {
		throw new Error ('ExpressionError: Brackets must be paired')
	}
	else {
		let result = (new Function('return ' + expr))();
		if(result === Infinity) {
			throw new Error ('TypeError: Devision by zero.')
		}
		return result
	}
}

module.exports = {
	expressionCalculator
}