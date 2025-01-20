"use client"
import React,{useState} from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

function CreateNewPage(){
  const [formData,setFromData] = useState();
  const onHandleInputChange=(fieldName,fieldValue)=>{
     setFromData(prev=>({
      ...prev,
      [fieldName]:fieldValue
     }))
  }

  const onCreateClickHandler = ()=>{
    GetVideoScript();
  }

  const GetVideoScript = async() => {
    const prompt = 'Write a script to generate '+formData.duration+' video on topic : '+formData.topic+' along with Al image prompt in '+formData.imageStyle+' for each scene and give me result in JSON format with imagePrompt and Content Text as field, No Plain text\n';

    console.log(prompt);
    const result = await axios.post('/api/get-video-script',{
      prompt:prompt
    }).then(resp=>{
      console.log(resp.data);
    })
  }
  return (
    <div  className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">Create New</h2>
      <div className="mt-10 shadow-md mt-10 p-10">
         <SelectTopic onUserSelect={onHandleInputChange}/>

         <SelectStyle onUserSelect={onHandleInputChange}/>

         <SelectDuration onUserSelect={onHandleInputChange}/>

         <Button className="mt-10 w-full" onClick={onCreateClickHandler}>Create Short Video</Button>

         
      </div>
    </div>
  );
}

export default CreateNewPage;