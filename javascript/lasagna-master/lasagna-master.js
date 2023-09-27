export function cookingStatus(timeRemaining) {
	if (timeRemaining === 0) {
		return "Lasagna is done."
	}
	else if (timeRemaining > 0) {
		return "Not done, please wait."
	}
	else return "You forgot to set the timer."
}


export function preparationTime(layers, TimePerLayer) {
	if (TimePerLayer) {
		return layers.length * TimePerLayer;
	}
	else return layers.length * 2;
}



export function quantities(ingredients) {
	const totalIngredients = {
		noodles: 0,
		sauce: 0,
	}
	for (let i = 0; i < ingredients.length; i++) {
		if (ingredients[i] === "noodles") {
			totalIngredients["noodles"] += 1;
		}
		else if (ingredients[i] === "sauce") {
			totalIngredients["sauce"] += 1;
		}
	}
	totalIngredients["noodles"] *= 50;
	totalIngredients["sauce"] *= 0.2;
	return totalIngredients;
}

export function addSecretIngredient(friendList, ownList) {
	const secret = friendList[friendList.length - 1];
	ownList.push(secret);
}

export function scaleRecipe(recipe, portions) {
	const modifiedRecipe = {};

	for (let key in recipe) {
		if (recipe.hasOwnProperty(key)) {
			modifiedRecipe[key] = recipe[key] / 2 * portions;
		}
	}
	return modifiedRecipe;
}