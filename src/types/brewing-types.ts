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

export enum Step {
  StrikeWater = "Strike Water",
  Mash = "Mash",
  Boil = "Boil",
  Fermentor = "Fermentor",
  Bottle = "Bottle",
}
export interface IngredientType {
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
  fermentables: Fermentable[];
  hops: Hop[];
  cultures: Culture[];
  nonFermentables: NonFermentable[];
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

export interface Fermentable extends IngredientType {
  lovibond: number;
  type: FermentableType;
  gravity: number;
  amount: number;
}
export interface Hop extends IngredientType {
  name: string;
  alphaAcid: number;
  amount: number;
}

export type CultureForm = "Liquid" | "Dry";

export interface Culture extends IngredientType {
  attenuation: number;
  form: CultureForm;
}

export interface NonFermentable extends IngredientType {
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
