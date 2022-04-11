export declare type MeasurementType = "imperial" | "metric";
export interface User {
    id: string;
    measurementType: MeasurementType;
    batchSize: number;
    boilTime: number;
    brewhouseEfficiency: number;
    waterLossPerGrain: number;
    fermentorTrubWaterLoss: number;
    kettleTrubWaterLoss: number;
    boilOffWaterLossRate: number;
    displayName: string;
    email: string;
    sparge: boolean;
    mashThickness: number;
}
export declare type RecipeType = "Other" | "Extract" | "Partial mash" | "All grain";
export declare type Step = "StrikeWater" | "Mash" | "Boil" | "Fermentor" | "Bottle";
export declare type IngredientType = "Fermentable" | "Hop" | "Culture" | "Chemistry" | "Misc";
export interface Ingredient {
    type: IngredientType;
    id: string;
    name: string;
    step: Step;
    timing?: number;
    notes?: string;
    amount: number;
    amountType: string;
}
export declare type ValidIngredient = Fermentable | Hop | Culture | NonFermentable | Chemistry;
export interface Recipe {
    id: string;
    userId: string;
    description?: string;
    name: string;
    type: RecipeType;
    author: string;
    createdDate: string;
    updatedDate: string;
    batchSize: number;
    efficiency: number;
    ingredients: Array<ValidIngredient>;
}
export declare type FermentableType = "Other" | "Liquid extract" | "Dry extract" | "Grain" | "Sugar" | "Fruit" | "Juice" | "Honey";
export interface Chemistry extends Ingredient {
    type: "Chemistry";
}
export interface Fermentable extends Ingredient {
    type: "Fermentable";
    lovibond: number;
    form: FermentableType;
    potential: number;
}
export interface Hop extends Ingredient {
    type: "Hop";
    alphaAcid: number;
}
export declare type CultureForm = "Liquid" | "Dry";
export interface Culture extends Ingredient {
    type: "Culture";
    attenuation: number;
    form: CultureForm;
}
export interface NonFermentable extends Ingredient {
    type: "Misc";
}
export interface Stats {
    srm: number | null;
    og: number | null;
    fg: number | null;
    abv: number | null;
    ibu: number | null;
    strikeWater: number | null;
    hotLiquor: number | null;
    waterLoss: number | null;
}
export interface BeerUser {
    email: string | null;
    displayName: string | null;
    photoUrl: string | null;
    uid: string;
}
