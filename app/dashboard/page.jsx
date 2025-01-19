import React from 'react';
import { Button } from '@/components/ui/button';
import Emptystate from './_components/Emptystate';

function DashboardPage() {
  const [videoList,setVideoList] = React.useState([]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Button>+ Create New</Button>
      </div>
      {videoList?.length==0&&<div>
        <Emptystate/>
        </div>}
    </div>
  );
}

export default DashboardPage;