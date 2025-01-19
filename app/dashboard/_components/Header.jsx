import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import {Button} from "@/components/ui/button"

function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between justify-end shadow-md">
      <div className="flex gap-3 items-center"> 
        <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
        <h2 className="font-bold text-xl">Snapcut</h2>
      </div>
      <div>
        <Button>Dashboard</Button>
        <UserButton/>
      </div>
    </div>
  );
}

export default Header;