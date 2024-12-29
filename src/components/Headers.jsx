import React, { useState } from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
function Headers() {
    const {user, isSignedIn } = useState();
  return (
    <div className='flex justify-between items-center shadow-sm p-5  w-full max-w-full ' >
        <img  src="/logo.svg" width={150} height={100} />

        <ul className='hidden md:flex gap-16'>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary'>Seach</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary'>Preowned</li>
        </ul>

    {isSignedIn? 
    <div className='flex items-center gap-5'>
        <UserButton />
        <Link to={'/profile'}>
        <Button>Submit Listing</Button>
        </Link>
    </div>
    :
    <Link to={'/profile'}>
        <Button>Submit Listing</Button>
        </Link>
    }


    </div>
  )
}

export default Headers