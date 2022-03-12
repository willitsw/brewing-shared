import * as Recipe from "./types/recipe";
import * as Stats from "./types/stats";
import * as User from "./types/user";
import * as Settings from "./types/brew-settings";

export const BrewTypes = {
  ...Recipe,
  ...Stats,
  ...User,
  ...Settings,
};
