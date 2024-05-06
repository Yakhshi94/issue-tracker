'use client'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'




function issuePage() {

  return (
    <div>
      <Button size="4" color='indigo' variant='classic'> <Link href='/issue/new'>Add New Issue</Link> </Button>
    </div>
  )
}

export default issuePage