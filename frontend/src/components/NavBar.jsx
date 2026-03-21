import React from 'react';
import { Link } from 'react-router';
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header className='bg-base-300'>
        <div className='mx-auto px-12 py-2'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-semibold text-primary font-sans'>IDEATE</h2>
                <div className='flex items-center gap-4'>
                    <Link to = {"/create"} className = "btn btn-primary">
                        <PlusIcon className = "size-5" />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar
