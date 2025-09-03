"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boosts = exports.ingredients = exports.recipesData = void 0;
exports.recipesData = [
    {
        name: "Salmon Dinner",
        ingredients: exports.ingredients,
        boosts: [],
        npcPreferences: {
            likedBy: ["Elliot", "Leah"],
            lovedBy: ["Emily", "Linus"]
        },
        rarity: "raro"
    },
    {
        name: "Pumpkin Soup",
        ingredients: [
            { name: "Pumpkin", quantity: 1, rarity: "comum" },
            { name: "Milk", quantity: 1, rarity: "comum" }
        ],
        boosts: [
            { description: "Aumenta a Força", effectDuration: "3m" }
        ],
        npcPreferences: {
            likedBy: ["Shane", "Pam"],
            lovedBy: ["Abigail", "Jas"]
        },
        rarity: "muito raro"
    }
];
exports.ingredients = [
    {
        name: "Salmon",
        quantidade: 1,
        raridade: "comum"
    }
];
exports.boosts = [
    {
        description: "Aumenta a Defesa",
        effectDuration: 5
    }
];
//# sourceMappingURL=data.js.map