import express from 'express';
import LivrosController from "../controllers/livrosControllers.js";

const router = express.Router();

router
    .get("/livros",LivrosController.listarLivros)
    .get("/livros/:id", LivrosController.livrosForId)
    .post("/livros",LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivros)
    .delete("/livros/:id",LivrosController.exluirLivro)
    export default router;