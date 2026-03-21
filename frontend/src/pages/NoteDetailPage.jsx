import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import NavBar from '../components/NavBar'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import { LoaderIcon, Trash2Icon } from 'lucide-react'

const NoteDetailPage = ({}) => {
  const [note, setNote] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try{
        const res = await api.get(`get-note/${id}`);
        console.log(res.data);
        setNote(res.data);
      } catch (e) {
        console.error("Error fetching notes: ", e);
        if (e?.response?.status === 429) {
          toast.error('Too many requests. Please try again later.')
        } else {
          toast.error(e?.response?.data?.message || 'Unknown error fetching note')
        }
      }
    };

    fetchNote();
  }, [])

  const handleDelete = async (e, id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`del-note/${id}`);
      navigate('/');
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSubmit = async (e, title, content) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error('Please provide title and content for the note.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.put(`put-note/${note._id}`, {
        title: title.trim(),
        content: content.trim(),
      })

      if (response.status === 200) {
        toast.success(response.data?.message || 'Note updated successfully')
        // setNotes((prev) => prev.map((n) => (n._id === note._id ? { ...n, title: title.trim(), content: content.trim() } : n)))
        setNote(null);
        navigate('/');
      } else {
        toast.error(response.data?.message || 'Failed to update note')
      }
    } catch (error) {
      console.error('Update note error:', error)

      if (error?.response?.status === 429) {
        toast.error('Too many requests. Please try again later.')
      } else {
        toast.error(error?.response?.data?.message || 'Unknown error updating note')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if(!note) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-3xl mx-auto p-4 mt-8">
        <h1 className="text-2xl font-bold mb-4">Edit Note</h1>

        <form onSubmit={(e) => handleSubmit(e, note.title, note.content)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="input input-bordered w-full"
              type="text"
              value={note?.title}
              onChange={(e) => setNote({...note, title: e.target.value })}
              placeholder="Meeting notes, thoughts, todo..."
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              className="textarea textarea-bordered w-full h-40"
              value={note?.content}
              onChange={(e) => setNote({...note, content: e.target.value })}
              placeholder="Write your note here..."
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => handleDelete(e, note._id)}
              disabled={isSubmitting}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Trash2Icon className="w-4 h-4" />
              <span>Delete</span>
            </button>

            <div className="flex gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => navigate('/')}
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NoteDetailPage
