import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

function Emptystate(){
  return (
     <div className="p-5 py-25 flex items-center flex-col mt-10 border-2 border">
      <h2>You don't have any short video crated</h2>
      <Link href={'/dashboard/create-new'}>
      <Button>Create New Short video</Button>
      </Link>
     </div>
  );
}

export default Emptystate;