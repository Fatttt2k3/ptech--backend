import React from 'react'
import Headers from '@/components/Headers'
import { Button } from '@/components/ui/button'
import Addlisting from '@/add-listing'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <div>
        <Headers />
        <div className='px-10 md:px-20 my-10'>
            <div className='flex justify-between items-center'>
                <h2  className='font-bold text-4xl'>My listing</h2>
                <Link to={'/add-listing'}>
                <Button>+ Add new listing</Button>
                </Link>
            </div>
        </div>
    </div>

  )
  
}

export default Profile