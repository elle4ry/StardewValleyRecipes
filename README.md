# **API Stardew Valley Recipes**🐣

Este projeto foi criado a partir da necessidade de estudar APIs e da paixão pelo jogo Stardew Valley 🌾.
O objetivo é disponibilizar uma API que auxilia jogadores a explorar as receitas do jogo, mostrando seus ingredientes, efeitos (boosts) e preferências de NPCs.

## 🏕️ **Tecnologias**

- TypeScript
- JavaScript

O servidor estará disponível em:
`http://localhost:3000`

## **Rotas da API** 🌻
### Rotas receitas
GET /recipes/
Retorna todas as receitas.

GET /recipes/:ingredient
Retorna receitas que contenham o ingrediente informado.

GET /recipes/character/:nomedopersonagem
Retorna todas as receitas que aquele personagem ama

### Rotas ingredientes
GET /ingredients/
Retorna todos os ingredientes.

### Rotas personagens
GET /character/
Lista todos os personagens.

👩‍🌾**Autora: Aryelle**
