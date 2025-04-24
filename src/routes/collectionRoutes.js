import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /colecoes/:id - Obter uma Coleção pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /colecoes - Criar uma nova Coleção
collectionRouter.post("/", CollectionController.createCollection);

// PUT /colecoes/:id - Atualizar um Personagem
//collectionRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /colecoes/:id - Remover um Personagem
//collectionRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;
