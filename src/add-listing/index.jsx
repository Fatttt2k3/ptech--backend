import Headers from '@/components/Headers'
import React from 'react'

function Addlisting() {
  return (
    <div>
        <Headers />
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'> 
                <div>
                    <h2 className='font-medium text-xl mb-6'>Chi tiết sản phẩm</h2>

                <div>
                    {spDetails.spDetails.map((item, index)=>(
                        <div key={index}> 
                        {item.fieldType == 'text'}
                        </div>
                    ))}
                </div>

                </div>


            </form>
        </div>
    </div>
  )
}

export default Addlisting