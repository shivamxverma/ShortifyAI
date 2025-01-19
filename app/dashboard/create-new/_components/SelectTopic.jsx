"use client"
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { useState } from 'react';

function SelectTopic({onUserSelect}){
  const options = ['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts'];
  const [selectOption,setselectOption] = useState();
  return (
    <div>
      <h2 className='font-bold text-xl text-primary'>Content</h2>
      <p className="text-black-100">What is the topic of your video?</p>
      <Select onValueChange={(value) => {
        setselectOption(value)
        value!='Custom Prompt'&&onUserSelect('topic',value)
        }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectOption === 'Custom Prompt' && (
        <Textarea className="mt-3" 
        onChange={(e)=>onUserSelect('topic',e.target.value)}
        placeholder="Write prompt on which you want to generate video" />
      )}
    </div>
  );
}

export default SelectTopic;