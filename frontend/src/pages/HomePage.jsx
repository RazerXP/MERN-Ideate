import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';
import api from '../lib/axios';
import { LoaderIcon } from 'lucide-react';

const HomePage = () => {
  const [isRateLimited,setIsRateLimited] = useState(false);
  const [notes,setNotes] = useState([]);
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try{
        const res = await api.get("get-notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (e) {
        console.error("Error fetching notes: ", e);
        if(e.response.status == 429){
          setIsRateLimited(true);
        } else{
          console.error("Error while fetching notes: ", e);
          toast.error("Unknown Error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [])

  return (
    <div className="min-h-screen">
      <NavBar/>

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && 
          <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <LoaderIcon className="animate-spin size-10" />
          </div>
        }

        {notes.length === 0 && !isRateLimited && !isLoading && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage
