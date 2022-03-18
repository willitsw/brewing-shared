import { Culture, Fermentable, Hop, Ingredient, NonFermentable, Recipe } from "../types/brewing-types";
export declare const sortIngredientsByStep: (recipe: Recipe) => {
    StrikeWater: Ingredient[];
    Mash: Ingredient[];
    Boil: Ingredient[];
    Fermentor: Ingredient[];
    Bottle: Ingredient[];
};
export declare const sortIngredientsByType: (recipe: Recipe) => {
    Fermentable: Fermentable[];
    Hop: Hop[];
    Culture: Culture[];
    Misc: NonFermentable[];
};
