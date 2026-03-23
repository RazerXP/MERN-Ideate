import { useState } from 'react'
import { useNavigate } from 'react-router'
import NavBar from '../components/NavBar.tsx'
import toast from 'react-hot-toast'
import api from '../lib/axios'

const CreatePage = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      toast.error('Please provide title and content for the note.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await api.post('post-note', {
        title: title.trim(),
        content: content.trim(),
      })

      if (response.status === 201) {
        toast.success(response.data?.message || 'Note created successfully')
        setTitle('')
        setContent('')
        navigate('/')
      } else {
        toast.error(response.data?.message || 'Failed to create note')
      }
    } catch (error) {
      console.error('Create note error:', error)

      if ((error as any)?.response?.status === 429) {
        toast.error('Too many requests. Please try again later.')
      } else {
        toast.error((error as any)?.response?.data?.message || 'Unknown error creating note')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-3xl mx-auto p-4 mt-8">
        <h1 className="text-2xl font-bold mb-4">Create Note</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="input input-bordered w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              disabled={isSubmitting}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create note'}
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
        </form>
      </div>
    </div>
  )
}

export default CreatePage
