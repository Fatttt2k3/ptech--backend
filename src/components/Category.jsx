import React from 'react'
import Data from './Shared/Data'
function Catogory() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Danh mục sản phẩm</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 '>
            {Data.Category.map((category, index) =>(
                <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
                    <img src={category.img} width={40} height={40} /> 
                    <h2 className='mt-2'>{category.icon}</h2>   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Catogory