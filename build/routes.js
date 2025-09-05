"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const receitas_1 = require("./receitas");
const ingredients_1 = require("./ingredients");
const pesonagens_1 = require("./pesonagens");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/recipes/', (req, res) => {
    res.json(receitas_1.recipesData);
});
routes.get('/recipes/:name', (req, res) => {
    const { name } = req.params;
    const recipe = receitas_1.recipesData.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
    if (recipe) {
        res.json(recipe);
    }
    else {
        res.status(404).json({ message: 'Receita não encontrada' });
    }
});
routes.get('/recipes/ingred/:ingredients', (req, res) => {
    const { ingredients } = req.params;
    const foundRecipes = receitas_1.recipesData.filter(recipe => recipe.ingredients.some(i => i.name.toLowerCase() === ingredients.toLowerCase()));
    if (foundRecipes.length > 0) {
        res.json(foundRecipes);
    }
    else {
        res.status(404).json({ message: 'Nenhuma receita com esse ingrediente encontrada' });
    }
});
routes.get('/recipes/character/:character', (req, res) => {
    const { character } = req.params;
    const foundRecipes = receitas_1.recipesData.filter(recipe => recipe.personagemQAma.some(c => c.namePerso.toLowerCase() === character.toLowerCase()));
    if (foundRecipes.length > 0) {
        res.json(foundRecipes);
    }
    else {
        res.status(404).json({ message: 'Esse personagem não gosta de nenhuma receita' });
    }
});
routes.get('/ingredients/:name', (req, res) => {
    const { name } = req.params;
    const ingredientsImpress = receitas_1.recipesData.find(ingredientsInter => ingredientsInter.name.toLowerCase() === name.toLowerCase());
    if (ingredientsImpress) {
        res.json(ingredientsImpress);
    }
    else {
        res.status(404).json({ message: 'Ingrediente não encontrado' });
    }
});
routes.get('/ingredients/', (req, res) => {
    res.json(ingredients_1.ingredients);
});
routes.get('/character/', (req, res) => {
    res.json(pesonagens_1.personagemQAma);
});
//# sourceMappingURL=routes.js.map