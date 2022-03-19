export type MeasurementType = "imperial" | "metric";

export interface BrewSettings {
  userId: string; // User Id that owns it
  author: string;
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

export type RecipeType = "Other" | "Extract" | "Partial mash" | "All grain";

export type Step = "StrikeWater" | "Mash" | "Boil" | "Fermentor" | "Bottle";

export type IngredientType =
  | "Fermentable"
  | "Hop"
  | "Culture"
  | "Chemistry"
  | "Misc";

export interface Ingredient {
  type: IngredientType;
  id: string;
  name: string;
  step: Step;
  timing: number;
  notes: string;
}

export interface Recipe {
  id: string;
  user: string;
  description?: string;
  name: string;
  type: RecipeType;
  author: string;
  createdDate?: string;
  updatedDate?: string;
  measurementType: MeasurementType;
  batchSize: number;
  efficiency: number;
  ingredients: Array<Fermentable | Hop | Culture | NonFermentable | Chemistry>;
}

export type FermentableType =
  | "Other"
  | "Liquid extract"
  | "Dry extract"
  | "Grain"
  | "Sugar"
  | "Fruit"
  | "Juice"
  | "Honey";

export interface Chemistry extends Ingredient {
  type: "Chemistry";
}
export interface Fermentable extends Ingredient {
  type: "Fermentable";
  lovibond: number;
  fermentableType: FermentableType;
  gravity: number;
  amount: number;
}
export interface Hop extends Ingredient {
  type: "Hop";
  name: string;
  alphaAcid: number;
  amount: number;
}

export type CultureForm = "Liquid" | "Dry";

export interface Culture extends Ingredient {
  type: "Culture";
  attenuation: number;
  form: CultureForm;
}

export interface NonFermentable extends Ingredient {
  type: "Misc";
  amount: string;
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
