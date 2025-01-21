import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"
import Image from 'next/image';


function CustomLoading({loading}){
  return (
      <AlertDialog open={loading}>
        <AlertDialogContent className="bg-white">
          <div className = "bg-white">
            <Image src={'/progress.gif'} width={100} height = {100}/>
            <h2>Generating your Video... Do not Refresh</h2>
          </div>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export default CustomLoading;