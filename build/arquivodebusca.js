"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickIngredients = pickIngredients;
exports.pickBoosts = pickBoosts;
exports.pickPersonagem = pickPersonagem;
const ingredients_1 = require("./ingredients");
const boost_1 = require("./boost");
const pesonagens_1 = require("./pesonagens");
function pickIngredients(names) {
    return ingredients_1.ingredients.filter(i => names.includes(i.name));
}
function pickBoosts(descriptions) {
    return boost_1.bonus.filter(b => descriptions.includes(b.description));
}
function pickPersonagem(namePerso) {
    return pesonagens_1.personagemQAma.filter(p => namePerso.includes(p.namePerso));
}
//# sourceMappingURL=arquivodebusca.js.map