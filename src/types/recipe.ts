import { MeasurementType } from "./brew-settings";

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
