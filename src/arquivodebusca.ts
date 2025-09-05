
import { ingredients, ingredientsInter } from "./ingredients";
import { bonus, BoostInter } from "./boost";
import { personagemQAma, personagemQAmaInter } from "./pesonagens";

// Pega ingredientes por nome
export function pickIngredients(names: string[]): ingredientsInter[] {
  return ingredients.filter(i => names.includes(i.name));
}

// Pega boosts por descrição
export function pickBoosts(descriptions: string[]): BoostInter[] {
  return bonus.filter(b => descriptions.includes(b.description));
}


export function pickPersonagem(namePerso: string[]): personagemQAmaInter[] {
  return personagemQAma.filter(p => namePerso.includes(p.namePerso));
}
