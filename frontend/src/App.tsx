import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import CreatePage from './pages/CreatePage.tsx'
import NoteDetailPage from './pages/NoteDetailPage.tsx'

const App = () => {
  return (
    <div data-theme = "sunset">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
