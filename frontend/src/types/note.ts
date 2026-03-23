export interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = Note> {
  status: number;
  message?: string;
  data?: T;
}

export interface NotesResponse extends ApiResponse<Note[]> {}
export interface NoteResponse extends ApiResponse<Note> {}
export interface MessageResponse extends ApiResponse<null> {}