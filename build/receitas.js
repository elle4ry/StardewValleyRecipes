"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesData = void 0;
const arquivodebusca_1 = require("./arquivodebusca");
exports.recipesData = [
    {
        name: "Fried egg",
        description: "Lado amarelinho para cima.",
        ingredients: (0, arquivodebusca_1.pickIngredients)(["Egg"]),
        boosts: (0, arquivodebusca_1.pickBoosts)(["N/A"]),
        personagemQAma: (0, arquivodebusca_1.pickPersonagem)(["Harvey"])
    },
    {
        name: "Omelet",
        description: "Superfofinha.",
        ingredients: (0, arquivodebusca_1.pickIngredients)(["Egg", "Milk"]),
        boosts: (0, arquivodebusca_1.pickBoosts)(["N/A"]),
        personagemQAma: (0, arquivodebusca_1.pickPersonagem)(["Harvey"])
    },
    {
        name: "Salmon Dinner",
        description: "",
        ingredients: (0, arquivodebusca_1.pickIngredients)(["Salmon"]),
        boosts: (0, arquivodebusca_1.pickBoosts)(["Aumenta a Defesa"]),
        personagemQAma: (0, arquivodebusca_1.pickPersonagem)(["Harvey"])
    },
    {
        name: "Pumpkin Soup",
        description: "",
        ingredients: (0, arquivodebusca_1.pickIngredients)(["Pumpkin", "Milk"]),
        boosts: (0, arquivodebusca_1.pickBoosts)(["Aumenta a Força"]),
        personagemQAma: (0, arquivodebusca_1.pickPersonagem)(["Harvey"])
    },
];
//# sourceMappingURL=receitas.js.map