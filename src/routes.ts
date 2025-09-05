import { Router } from 'express';
import { recipesData } from './receitas';
import { ingredients, ingredientsInter } from "./ingredients";
import { BoostInter } from "./boost";
import { personagemQAma } from './pesonagens';

const routes = Router();

//ROTAS DA RECEITA
//Testar dessa forma: http://localhost:3000/api/recipes/Pumpkin Soup

//Todas as receitas
routes.get('/recipes/', (req, res) => {
    res.json(recipesData);
});

// Somente a receita que você passar pela url
routes.get('/recipes/:name', (req, res) => {
    const { name } = req.params;
    const recipe = recipesData.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
    
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: 'Receita não encontrada' });
    }
});

// Localizar a receita somente pelo ingrediente
//Testar dessa forma: http://localhost:3000/api/recipesIngred/Egg
routes.get('/recipes/ingred/:ingredients', (req, res) => {
    const { ingredients } = req.params

    // Const responsável por filtrar as receitas com o valor na url
    const foundRecipes = recipesData.filter(recipe =>
        recipe.ingredients.some(i => i.name.toLowerCase() === ingredients.toLowerCase())
      );

    if( foundRecipes.length > 0){
        res.json(foundRecipes)
    }else{
        res.status(404).json({ message: 'Nenhuma receita com esse ingrediente encontrada' });
    }
});

// Localizar receita pelo nome do personagem
routes.get('/recipes/character/:character', (req, res) => {
    const { character } = req.params;

    const foundRecipes = recipesData.filter(recipe =>
        recipe.personagemQAma.some(c => c.namePerso.toLowerCase() === character.toLowerCase())
    );

    if( foundRecipes.length > 0){
        res.json(foundRecipes)
    }else{
        res.status(404).json({ message: 'Esse personagem não gosta de nenhuma receita' });
    }

});

//ROTAS DOS INGREDIENTES
//Testar dessa forma: http://localhost:3000/api/ingredients

// Exemplo de endpoint GET
routes.get('/ingredients/:name', (req, res) => {
    const { name } = req.params;
    const ingredientsImpress = recipesData.find(ingredientsInter => ingredientsInter.name.toLowerCase() === name.toLowerCase());
    
    if (ingredientsImpress) {
        res.json(ingredientsImpress);
    } else {
        res.status(404).json({ message: 'Ingrediente não encontrado' });
    }
});

routes.get('/ingredients/', (req, res) => {
    res.json(ingredients);
});

//ROTAS DOS PERSONAGENS
//Testar dessa forma: http://localhost:3000/api/personagem/

routes.get('/character/', (req, res) => {
    res.json(personagemQAma);
});

export { routes };
