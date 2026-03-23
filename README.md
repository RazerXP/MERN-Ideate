# MERN-Ideate

A full-stack notes application built with the MERN stack in TypeScript (MongoDB, Express.js, React, Node.js). This project allows users to create, read, update, and delete notes with a clean, responsive interface.

## 🚀 Live Demo

The application is deployed and live at: [https://ideate-f3hw.onrender.com/](https://ideate-f3hw.onrender.com/)

## Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Browse all notes on the home page
- **Edit Notes**: Update existing notes
- **Delete Notes**: Remove notes you no longer need
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Rate Limiting**: Built-in rate limiting to prevent abuse
- **Modern UI**: Clean interface using Tailwind CSS and DaisyUI components

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **TypeScript** - Typed JavaScript for backend logic
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing

### Frontend
- **TypeScript** - Typed JavaScript for frontend components and pages
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Notification system

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **TypeScript** (installed as dev dependency in each package)
- **MongoDB** (local installation or MongoDB Atlas)
- **Upstash Redis** account (for rate limiting)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/MERN-Ideate.git
   cd MERN-Ideate
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

   - **MONGO_URI**: Your MongoDB connection string (local or Atlas)
   - **PORT**: Server port (default: 5000)
   - **UPSTASH_REDIS_REST_URL**: Your Upstash Redis REST URL
   - **UPSTASH_REDIS_REST_TOKEN**: Your Upstash Redis REST token

## Usage

### Development

1. **Start both backend and frontend servers**
   ```bash
   npm run dev
   ```

2. **Open your browser**

   Navigate to `http://localhost:5173` to access the application.

### Manual Setup (Alternative)

If you prefer to run services separately:

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser**

   Navigate to `http://localhost:5173` to access the application.

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/v1/get-notes` - Retrieve all notes
- `GET /api/v1/get-note/:id` - Retrieve a specific note by ID
- `POST /api/v1/post-note` - Create a new note
- `PUT /api/v1/put-note/:id` - Update an existing note
- `DELETE /api/v1/del-note/:id` - Delete a note

### Request/Response Examples

**Create a Note:**
```json
POST /api/v1/post-note
{
  "title": "My First Note",
  "content": "This is the content of my note."
}
```

**Response:**
```json
{
  "_id": "note_id",
  "title": "My First Note",
  "content": "This is the content of my note.",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Project Structure

```
MERN-Ideate/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts
│   │   │   └── upstash.ts
│   │   ├── controllers/
│   │   │   └── notesController.ts
│   │   ├── middleware/
│   │   │   └── rateLimiter.ts
│   │   ├── models/
│   │   │   └── Note.ts
│   │   ├── routes/
│   │   │   └── notesRoutes.ts
│   │   └── server.ts
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.tsx
│   │   │   ├── NoteCard.tsx
│   │   │   ├── NotesNotFound.tsx
│   │   │   └── RateLimitedUI.tsx
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the backend framework
- [React](https://reactjs.org/) for the frontend library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for UI components
- [Upstash](https://upstash.com/) for Redis services</content>
<parameter name="filePath">d:\Coding\Backend\MERN-Ideate\README.md