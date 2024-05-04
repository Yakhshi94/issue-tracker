'use client'
import { TextField, Button } from '@radix-ui/themes'
import Link from 'next/link'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function issuePage() {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root variant="surface" placeholder="Title" />
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default issuePage