"use client"
import React,{useState} from 'react';

function SelectStyle({onUserSelect}){
   const styleOptions=[
     {
       name:'Realstic',
       image:'/real.jpg'
     },
     {
      name:'Cartoon',
      image:'/cartoon.jpg'
    },
    {
      name:'Comic',
      image:'/comic.jpg'
    },
    {
      name:'WaterColor',
      image:'/watercolor.jpg'
    },
    {
      name:'GTA',
      image:'/gta.png'
    },
   ];
   const [selectOption,setSelectOption] = useState();
   return(
    <div className='mt-7'>
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select video style</p>
      <div className='grid grid-col-2 md:grid-cols-5
          xl:grid-cols-6 gap-5 mt-3'>
        {styleOptions.map((item,index)=>(
          <div className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
          ${selectOption==item.name&&'border-4 border-primary'}`}
          >
            <Image src={item.image} width={100} height={100}
            className="h-48 object-cover rounded-lg w-full"
            
            onClick={()=>{
              setSelectOption(item.name)
              onUserSelect('imageStyle',item.name)
            }}
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
   );
}

export default SelectStyle;
