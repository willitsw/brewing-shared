"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.sortIngredientsByType = exports.sortIngredientsByStep = void 0;
const sortAmountDescending = (a, b) => {
    if (a.amount > b.amount) {
        return -1;
    }
    else if (a.amount < b.amount) {
        return 1;
    }
    else {
        return 0;
    }
};
const sortTimeDescending = (a, b) => {
    if (a.timing > b.timing) {
        return -1;
    }
    else if (a.timing < b.timing) {
        return 1;
    }
    else {
        return 0;
    }
};
const sortTimeAscending = (a, b) => {
    if (a.timing < b.timing) {
        return -1;
    }
    else if (a.timing > b.timing) {
        return 1;
    }
    else {
        return 0;
    }
};
const sortIngredientsByStep = (ingredients) => {
    const sortedIngredients = ingredients.reduce((returnValue, currentValue) => {
        returnValue[currentValue.step].push(currentValue);
        return returnValue;
    }, { StrikeWater: [], Mash: [], Boil: [], Fermentor: [], Bottle: [] });
    sortedIngredients.StrikeWater.sort(sortAmountDescending);
    sortedIngredients.Mash.sort(sortAmountDescending);
    sortedIngredients.Boil.sort(sortTimeDescending);
    sortedIngredients.Fermentor.sort(sortTimeAscending);
    sortedIngredients.Bottle.sort(sortAmountDescending);
    return sortedIngredients;
};
exports.sortIngredientsByStep = sortIngredientsByStep;
const sortIngredientsByType = (ingredients) => {
    const sortedIngredients = ingredients.reduce((returnValue, currentValue) => {
        returnValue[currentValue.type].push(currentValue);
        return returnValue;
    }, { Fermentable: [], Hop: [], Culture: [], Misc: [], Chemistry: [] });
    sortedIngredients.Chemistry.sort(sortAmountDescending);
    sortedIngredients.Culture.sort(sortAmountDescending);
    sortedIngredients.Fermentable.sort(sortAmountDescending);
    sortedIngredients.Hop.sort(sortAmountDescending);
    sortedIngredients.Misc.sort(sortAmountDescending);
    return sortedIngredients;
};
exports.sortIngredientsByType = sortIngredientsByType;
const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1; // Months start at 0!
    const dd = today.getDate();
    return dd + "/" + mm + "/" + yyyy;
};
exports.getDate = getDate;
