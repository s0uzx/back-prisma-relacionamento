import express from "express";
import CardController from "../controllers/cardController.js";

const cardRouter = express.Router();

// Rotas de Cartas
// GET /colecoes - Listar todas as Cartas
cardRouter.get("/", CardController.getAllCollections);

// GET /colecoes/:id - Obter uma Carta pelo ID
cardRouter.get("/:id", CardController.getCardById);

// POST /colecoes - Criar uma nova Carta
cardRouter.post("/", CardController.createCard);

// PUT /colecoes/:id - Atualizar uma Carta
cardRouter.put("/:id", CardController.updateCard);

// DELETE /colecoes/:id - Remover uma Carta
cardRouter.delete("/:id", CardController.deleteCard);

export default cardRouter;
