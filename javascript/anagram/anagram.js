//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidate) => {
	const anagrams = [];


	for (let i = 0; i < candidate.length; i++) {
		const splitSortCandidate = candidate[i].toLowerCase().split('').sort().join('');
		const splitSortTarget = target.toLowerCase().split('').sort().join('');


		if (splitSortCandidate === splitSortTarget && candidate[i].toLowerCase() !== target.toLowerCase()) {
			anagrams.push(candidate[i]);
		}
	}
	return anagrams;

};

// string in einzelne buchstaben zerteilen
// let sorted = buchstaben sortieren
// if sorted = target; return true;