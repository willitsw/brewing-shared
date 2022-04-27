import { Chemistry, Culture, Fermentable, Hop, Ingredient, NonFermentable } from "../types/brewing-types";
export declare const sortIngredientsByStep: (ingredients: Ingredient[]) => {
    StrikeWater: Ingredient[];
    Mash: Ingredient[];
    Boil: Ingredient[];
    Fermentor: Ingredient[];
    Bottle: Ingredient[];
};
export declare const sortIngredientsByType: (ingredients: Ingredient[]) => {
    Fermentable: Fermentable[];
    Hop: Hop[];
    Culture: Culture[];
    Misc: NonFermentable[];
    Chemistry: Chemistry[];
};
