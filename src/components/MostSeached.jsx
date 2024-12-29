import React from 'react'
import Spitem from './spitem';
import Data from './Shared/Data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

function MostSeached() {
  console.log(Data.MostSeached);
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center my-16'>Top tìm kiếm nhiều nhất</h2>
        
        <Carousel>
          <CarouselContent>
            {Data.MostSeached.map((sanpham, index) =>(
              <CarouselItem className="basis-1/5">
              <Spitem sanpham={sanpham}  key={index}/>
              </CarouselItem>
        ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>





       
    </div>
  )
}

export default MostSeached