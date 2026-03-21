import Note from "../models/note.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt:-1 });
        res.status(200).json(notes);
    } catch (e) {
        console.error("Error while fetching notes: ", e);
        res.status(500).json({ status: 0, message: "Failed to send notes!" })
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note);
    } catch (e) {
        console.error("Error while fetching note: ", e);
        res.status(500).json({ status: 0, message: "Failed to fetch note!" })
    }
}

export const postNote = async (req, res) => {
    try {
        const { title,content } = req.body;
        const newNote = new Note({title, content});

        const note = await newNote.save();
        res.status(201).json({ status: 1, message: "Note created successfully", data: note })
    } catch (e) {
        console.error("Error while creating note: ", e);
        res.status(500).json({ message: "Failed to create note!" })
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title,content } = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, {title,content});
        if(!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ status: 1, message: "Note udpated successfully"})
    } catch (e){
        console.error("Error while updating note: ", e);
        res.status(500).json({ status: 0, message: "Failed to update note!" })
    }
}

export const delNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ status: 1, message: "Note deleted successfully"})
    } catch (e){
        console.error("Error while updating note: ", e);
        res.status(500).json({ status: 0, message: "Failed to delete note!" })
    }
}