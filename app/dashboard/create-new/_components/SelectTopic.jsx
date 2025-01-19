"use client"
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SelectTopic(){
  const options = ['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts']
  return (
    <div>
      <h2 className='font-bold text-xl text-primary'>Content</h2>
      <p className="text-black-100">What is the topic your video</p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item,index)=>(<SelectItem value={item}>{item}</SelectItem>))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectTopic;