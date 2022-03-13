import {
  Culture,
  Fermentable,
  Hop,
  IngredientType,
  NonFermentable,
  Recipe,
  Step,
} from "../types/brewing-types";

export const getFermentables = (recipe: Recipe): Fermentable[] => {
  return getIngredientByType(recipe, "Fermentable") as Fermentable[];
};

export const getHops = (recipe: Recipe): Hop[] => {
  return getIngredientByType(recipe, "Hop") as Hop[];
};

export const getCultures = (recipe: Recipe): Culture[] => {
  return getIngredientByType(recipe, "Culture") as Culture[];
};

export const getNonFermentables = (recipe: Recipe): NonFermentable[] => {
  return getIngredientByType(recipe, "Misc") as NonFermentable[];
};

const getIngredientByType = (
  recipe: Recipe,
  ingredientType: IngredientType
) => {
  return recipe.ingredients.filter(({ type }) => type === ingredientType);
};

export const getIngredientByStep = (
  recipe: Recipe,
  brewingStep: Step
): (Fermentable | Hop | Culture | NonFermentable)[] => {
  return recipe.ingredients.filter(({ step }) => step === brewingStep);
};
