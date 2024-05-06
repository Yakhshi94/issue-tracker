'use client'
import { TextField, Button, Callout } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title: String;
  description: String;
}

function issuePage() {
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, control } =  useForm<IssueForm>();

  return (

    <div className='max-w-xl'>
      {error && (
      <Callout.Root color="red" className='mb-5'>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>
      )}
    <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
      try {
        await axios.post('/api/issue', data);
        router.push('/issue');
      } catch (err) {
        setError('unexpected error has occured');
        console.log(err)
      }

    }) }>
        
        <TextField.Root variant="surface" placeholder="Title" {...register('title')} />

        <Controller 
          name='description'
          control={control}
          render={( { field }) => <SimpleMDE placeholder="Description" {...field} />}
          />
         <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default issuePage