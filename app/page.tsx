import { Button, Spinner } from '@radix-ui/themes'
import { FaceIcon, ImageIcon, SunIcon, BookmarkIcon  } from '@radix-ui/react-icons'


export default function Home() {
  return (
    <main>
      <Button size="4" variant="classic" color="indigo" radius='large'>
        <BookmarkIcon />
      </Button>
    </main>
  )
}
