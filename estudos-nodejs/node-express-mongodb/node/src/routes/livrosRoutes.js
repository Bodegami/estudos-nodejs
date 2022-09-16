import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

// Na parte de rotas é importante priorizar as mais especificas primeiro e depois as menos especificas
// Priorizar da mais especifica (editora) para menos especifica (id)

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastraLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

export default router;