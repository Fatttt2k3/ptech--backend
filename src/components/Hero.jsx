import React from 'react'
import Search from './Search'
import image1 from "./../assets/computer.png"

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
        
                <h2 className='text-lg'>Ưu đãi khủng khi mua PC tại Ptech</h2>
                <h2 className='text-5xl font-bold'>Lựa chọn PC ngay!!!</h2>
                <Search /> 
                <img src={image1} style={{width:"500px"}}/>
        </div>
    </div>
  )
}

export default Hero