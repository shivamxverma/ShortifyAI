import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"


function CustomLoading({loading}){
  return (
      <AlertDialog open={loading}>
        <AlertDialogContent>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export default CustomLoading;