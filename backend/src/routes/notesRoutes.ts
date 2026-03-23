import express from "express";
import { delNote, getNote, getNotes, postNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get('/get-notes', getNotes);
router.get('/get-note/:id', getNote);
router.post('/post-note', postNote);
router.put('/put-note/:id', updateNote);
router.delete('/del-note/:id', delNote);

export default router;