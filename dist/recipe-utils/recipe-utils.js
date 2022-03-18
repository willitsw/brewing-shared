"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortIngredientsByType = exports.sortIngredientsByStep = void 0;
// export const getFermentables = (recipe: Recipe): Fermentable[] => {
//   return getIngredientByType(recipe, "Fermentable") as Fermentable[];
// };
// export const getHops = (recipe: Recipe): Hop[] => {
//   return getIngredientByType(recipe, "Hop") as Hop[];
// };
// export const getCultures = (recipe: Recipe): Culture[] => {
//   return getIngredientByType(recipe, "Culture") as Culture[];
// };
// export const getNonFermentables = (recipe: Recipe): NonFermentable[] => {
//   return getIngredientByType(recipe, "Misc") as NonFermentable[];
// };
// const getIngredientByType = (
//   recipe: Recipe,
//   ingredientType: IngredientType
// ) => {
//   return recipe.ingredients.filter(({ type }) => type === ingredientType);
// };
const sortIngredientsByStep = (recipe) => {
    return recipe.ingredients.reduce((returnValue, currentValue) => {
        returnValue[currentValue.step].push(currentValue);
        return returnValue;
    }, { StrikeWater: [], Mash: [], Boil: [], Fermentor: [], Bottle: [] });
};
exports.sortIngredientsByStep = sortIngredientsByStep;
const sortIngredientsByType = (recipe) => {
    return recipe.ingredients.reduce((returnValue, currentValue) => {
        returnValue[currentValue.type].push(currentValue);
        return returnValue;
    }, { Fermentable: [], Hop: [], Culture: [], Misc: [] });
};
exports.sortIngredientsByType = sortIngredientsByType;
