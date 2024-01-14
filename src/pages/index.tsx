import PageExample from '@/components/PageExample'
import { GridBg } from '@/components/GridBg'

export default function Home() {
  return (
    <>
      <GridBg color='bg-white' size='lg'>
        <PageExample />
        <PageExample />
        <PageExample />
      </GridBg>
    </>
  )
}
