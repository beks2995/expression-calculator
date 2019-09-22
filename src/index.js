function expressionCalculator(expr) {
	const bracketOpen = expr.match(/\(/g);
	const bracketClose = expr.match(/\)/g);
	let bracketOpenCount;
	let bracketCloseCount;

	if (bracketOpen) {
		bracketOpenCount = bracketOpen.length;
	}

	if (bracketClose) {
		bracketCloseCount = bracketClose.length;
	}

	if (bracketOpenCount !== bracketCloseCount) {
		throw new Error('ExpressionError: Brackets must be paired')
	} else {
		let result = (new Function('return ' + expr))();
		if (result === Infinity) {
			throw new Error('TypeError: Devision by zero.')
		}
		return result
	}
}

module.exports = {
	expressionCalculator
};