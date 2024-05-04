import React from 'react'
import { TextField, Flex, TextArea, Button } from '@radix-ui/themes'
import Link from 'next/link'


function issuePage() {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root variant="surface" placeholder="Title" />
        <TextArea placeholder="Description" />
        <Button size="4" variant='soft' color='indigo'>Submit New Issue</Button>
    </div>
  )
}

export default issuePage