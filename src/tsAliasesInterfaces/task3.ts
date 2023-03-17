interface Recipe {
  name: string;
  ingredients: string[];
}

const recipes: Recipe[] = [
  {
    name: "Potato Pancakes",
    ingredients: ["potatos", "salt", "oil", "sour cream"],
  },
  { name: "Scrambled Eggs", ingredients: ["eggs", "salt", "oil"] },
  {
    name: "Meatballs",
    ingredients: ["minced meat", "salt", "peper", "oil", "eggs", "baguette"],
  },
  { name: "Jelly", ingredients: ["gelatin", "juice", "sugar", "cream"] },
];

const longestListOfIngredients = (recipes: Recipe[]): Recipe =>
  recipes.reduce((r1, r2) =>
    r1.ingredients.length > r2.ingredients.length ? r1 : r2
  );

console.log(longestListOfIngredients(recipes));
