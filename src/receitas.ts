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
    name: "Ovo frito",
    description: "Lado amarelinho para cima.",
    ingredients: pickIngredients(["Ovo"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Harvey"])
  },
  {
    name: "Omelet",
    description: "Superfofinha.",
    ingredients: pickIngredients(["Ovo", "Leite"]),
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
  {
    name: "Salada",
    description: "Uma saudável salada de jardim",
    ingredients: pickIngredients(["Alho-poró", "Dente-de-leão","Vinagre"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Leah"])
  },
  {
    name: "Couve-flor com queijo",
    description: "Um cheiro maravilhoso!",
    ingredients: pickIngredients(["Couve-flor", "Queijo"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Maru"])
  },
  {
    name: "Peixe Assado",
    description: "Peixe assado em uma cama de ervas.",
    ingredients: pickIngredients(["Peixe-sol", "Brema","Farinha de trigo"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["N/A"])
  },
  {
    name: "Sopa de chirívia",
    description: "Fresca e com um sabor forte.",
    ingredients: pickIngredients(["Chirívia", "Leite","Vinagre"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Pam"])
  },
  {
    name: "Mexido de legumes",
    description: "Muito nutritivo.",
    ingredients: pickIngredients(["Tomate", "Beterraba"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Jodi", "Leah", "Lewis"])
  },
  {
    name: "Café da manhã completo",
    description: "Dá energia para conquistar o mundo!",
    ingredients: pickIngredients(["Ovo frito", "Leite","Batata-palha","Panquecas"]),
    boosts: pickBoosts(["Cultivo","Energia Máxima"]),
    personagemQAma:pickPersonagem(["Alex"])
  },
  {
    name: "Lula frita",
    description: "Que puxenta!",
    ingredients: pickIngredients(["Lula", "Farinha de trigo","Óleo"]),
    boosts: pickBoosts(["N/A"]),
    personagemQAma:pickPersonagem(["Alex"])
  },
];
