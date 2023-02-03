import { Router } from "express";
import * as NoteController from "../../controllers/noteController";

const router = Router();

// Retorna todas as notes
router.get("/notes", NoteController.getAllNotes);

// Retorna a note com o id específico
router.get("/notes/:id", NoteController.getNoteById);

// Cria uma nova note
router.post("/notes", NoteController.createNote);

// Atualiza uma note com o id específico
router.put("/notes/:id", NoteController.updateNoteById);

// Deleta uma note com o id específico
router.delete("/notes/:id", NoteController.deleteNoteById);

export default router;
