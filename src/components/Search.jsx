import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { CiSearch } from "react-icons/ci";
import Data from './Shared/Data';


function Search() {
  return (
    <div className='flex p-2 bg-white rounded-md md:rounded-full flex-col md:flex-row gap-5 px-5 items-center w-[80%]'>
        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Nhu cầu" />
        </SelectTrigger>
        <SelectContent>
            {Data.PCType.map((type,index)=>(
                <SelectItem value={type.name}>{type.name}</SelectItem>
            ))}
           
        </SelectContent>
        </Select>
    <Separator orientation='vertical' className="hidden md:block" />
        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Hãng CPU" />
        </SelectTrigger>
        <SelectContent>
        {Data.CPUType.map((type,index)=>(
                <SelectItem value={type.cpu}>{type.cpu}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        <Separator orientation='vertical'  className="hidden md:block" />

        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Giá" />
        </SelectTrigger>
        <SelectContent>
        {Data.Pricing.map((type,index)=>(
                <SelectItem value={type.amout}>{type.amout}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        

        <div>
                 <CiSearch className='text-[50px] text-white  bg-primary rounded-full p-3 hover:scale-105 transition-all cursor-pointer'/>
   
        </div>


    </div>
  )
}

export default Search