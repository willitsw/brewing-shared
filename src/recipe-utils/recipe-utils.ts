import {
  Culture,
  Fermentable,
  Hop,
  Ingredient,
  NonFermentable,
  Recipe,
} from "../types/brewing-types";

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

export const sortIngredientsByStep = (
  ingredients: Ingredient[]
): {
  StrikeWater: Ingredient[];
  Mash: Ingredient[];
  Boil: Ingredient[];
  Fermentor: Ingredient[];
  Bottle: Ingredient[];
} => {
  return ingredients.reduce(
    (returnValue, currentValue) => {
      returnValue[currentValue.step].push(currentValue);
      return returnValue;
    },
    { StrikeWater: [], Mash: [], Boil: [], Fermentor: [], Bottle: [] }
  );
};

export const sortIngredientsByType = (
  ingredients: Ingredient[]
): {
  Fermentable: Fermentable[];
  Hop: Hop[];
  Culture: Culture[];
  Misc: NonFermentable[];
} => {
  return ingredients.reduce(
    (returnValue, currentValue) => {
      returnValue[currentValue.type].push(currentValue);
      return returnValue;
    },
    { Fermentable: [], Hop: [], Culture: [], Misc: [] }
  );
};