export const toRoman = (arabicNumber) => {
	let result = '';

	// Define the Roman numeral symbols and their corresponding values.
	const romanNumerals = [
		{ value: 1000, numeral: 'M' },
		{ value: 900, numeral: 'CM' },
		{ value: 500, numeral: 'D' },
		{ value: 400, numeral: 'CD' },
		{ value: 100, numeral: 'C' },
		{ value: 90, numeral: 'XC' },
		{ value: 50, numeral: 'L' },
		{ value: 40, numeral: 'XL' },
		{ value: 10, numeral: 'X' },
		{ value: 9, numeral: 'IX' },
		{ value: 5, numeral: 'V' },
		{ value: 4, numeral: 'IV' },
		{ value: 1, numeral: 'I' }
	];

	// Loop through the Roman numeral symbols and build the result.
	for (const numeral of romanNumerals) {
		while (arabicNumber >= numeral.value) {
			result += numeral.numeral;
			arabicNumber -= numeral.value;
		}
	}

	return result;
};
