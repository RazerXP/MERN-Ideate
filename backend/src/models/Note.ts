import mongoose, { Schema } from "mongoose";

export interface INote {
  title: string;
  content: string;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = mongoose.model<INote>("Note", noteSchema);

export default Note;