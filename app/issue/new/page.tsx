'use client'
import { TextField, Button, Callout, Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage'
import Spinner from '@/app/components/Spinner';


type IssueForm = z.infer<typeof createIssueSchema>;

function issuePage() {
  const [error, setError] = useState('');
  const [isSubmiting, setSubmiting] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, control, formState: { errors } } =  useForm<IssueForm>({
    resolver:zodResolver(createIssueSchema)
  });


  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      await axios.post('/api/issue', data);
      router.push('/issue');
    } catch (err) {
      setSubmiting(false);
      setError('unexpected error has occured');
      console.log(err);
    }

  }) 

  return (

    <div className='max-w-xl'>
      {error && (
      <Callout.Root color="red" className='mb-5'>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>
      )}
    <form className='space-y-3' onSubmit={onSubmit}>
        
        <TextField.Root variant="surface" placeholder="Title" {...register('title')} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
          name='description'
          control={control}
          render={( { field }) => <SimpleMDE placeholder="Description" {...field} />}
          />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
         <Button disabled={isSubmiting}>Submit New Issue {isSubmiting && <Spinner />}</Button>
    </form>
    </div>
  )
}

export default issuePage