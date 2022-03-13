import {
  Culture,
  Fermentable,
  Hop,
  IngredientType,
  NonFermentable,
  Recipe,
  Step,
} from "../types/brewing-types";

export const getIngredientByType = (
  recipe: Recipe,
  ingredientType: IngredientType
) => {
  switch (ingredientType) {
    case "Fermentable":
      return recipe.ingredients.filter(
        ({ type }) => type === "Fermentable"
      ) as Fermentable[];
    case "Hop":
      return recipe.ingredients.filter(({ type }) => type === "Hop") as Hop[];
    case "Culture":
      return recipe.ingredients.filter(
        ({ type }) => type === "Culture"
      ) as Culture[];
    case "Misc":
      return recipe.ingredients.filter(
        ({ type }) => type === "Misc"
      ) as NonFermentable[];
    default:
      throw new Error("Invalid type specified");
  }
};

export const getIngredientByStep = (
  recipe: Recipe,
  brewingStep: Step
): (Fermentable | Hop | Culture | NonFermentable)[] => {
  return recipe.ingredients.filter(({ step }) => step === brewingStep);
};
