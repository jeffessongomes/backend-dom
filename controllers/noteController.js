import { Sequelize } from "sequelize";
import { Notes } from "../models/notes";

const notes = new Notes(Sequelize);

// controller/notesController.js
export const createNote = async (req, res) => {
  try {
    const newNote = await notes.create(req.body);
    return res.status(201).json(newNote);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await notes.findAll();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await notes.findByPk(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Notes.update(req.body, {
      where: { id },
      returning: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Note not found" });
    }
    const updatedNote = await notes.findByPk(id);
    return res.status(200).json(updatedNote);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await notes.findByPk(id);
    if (!note) {
      return res.status(404).send({ error: "Note not found" });
    }
    await note.destroy();
    return res.send({ message: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
