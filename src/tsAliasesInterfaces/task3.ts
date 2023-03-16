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

const longestListOfIngredients = (recipes: Recipe[]): Recipe => {
  const longestList = Math.max(...recipes.map((r) => r.ingredients.length));
  return <Recipe>(
    recipes.find((r) =>
      recipes !== undefined
        ? r.ingredients.length === longestList
        : "list is empty."
    )
  );
};

console.log(longestListOfIngredients(recipes));
