
export interface BoostInter{
    description: string;
    effectDuration: number;
}

export const bonus: BoostInter[] = [
    { description: "Aumenta a Defesa",effectDuration: 5},
    { description: "Cultivo",effectDuration: 5},
    { description: "Energia Máxima",effectDuration: 7},
    { description: "N/A",effectDuration: 0}
]
