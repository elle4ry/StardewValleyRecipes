interface Recipe {
    name: string;
    ingredients: Ingredientes;
    boosts: { description: string; effectDuration: string }[];
    npcPreferences: { likedBy: string[]; lovedBy: string[] };
    rarity: string;
}
export const recipesData: Recipe[] = [
    {
        name: "Salmon Dinner",
        ingredients: Ingredientes[];
        boosts: [
            
        ],
        npcPreferences: {
            likedBy: ["Elliot", "Leah"],
            lovedBy: ["Emily", "Linus"]
        },
        rarity: "raro"
    },
    {
        name: "Pumpkin-Soup",
        ingredients: Ingredientes[],
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

////////////////////////////////////////////////////////////////////////////

interface Ingredientes{
    name: string;
    quantity: number;
    rarity: string;
}

export const ingredients: Ingredientes[] = [
    { 
        name: "Salmon", 
        quantity: 1, 
        rarity: "comum" 
    }
]

////////////////////////////////////////////////////////////////////////////

interface bost{
    description: string;
    effectDuration: number;
}

export const boosts: bost[] = [
    { 
        description: "Aumenta a Defesa", 
        effectDuration: 5
    }
]

////////////////////////////////////////////////////////////////////////////