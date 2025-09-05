import { ingredientsInter } from "./ingredients";
import { BoostInter } from "./boost";
import { personagemQAmaInter } from "./pesonagens";
import { pickIngredients, pickBoosts, pickPersonagem } from "./arquivodebusca";

interface Recipe {
  name: string;
  description: string;
  ingredients: ingredientsInter[];
  boosts: BoostInter[];
  personagemQAma: personagemQAmaInter[];
}

export const recipesData: Recipe[] = [
  {
    name: "Fried egg",
    description: "Lado amarelinho para cima.",
    ingredients: pickIngredients(["Egg"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Harvey"])
  },
  {
    name: "Omelet",
    description: "Superfofinha.",
    ingredients: pickIngredients(["Egg", "Milk"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Harvey"])
  },
  {
    name: "Salmon Dinner",
    description: "",
    ingredients: pickIngredients(["Salmon"]),
    boosts: pickBoosts(["Aumenta a Defesa"]),
    personagemQAma:pickPersonagem(["Harvey"])
  },
  {
    name: "Pumpkin Soup",
    description: "",
    ingredients: pickIngredients(["Pumpkin", "Milk"]),
    boosts: pickBoosts(["Aumenta a Força"]),
    personagemQAma:pickPersonagem(["Harvey"])
  },
];
