import { Box } from '@chakra-ui/react'

import { Banner } from '../components/Banners/Banner'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'
import { cards } from '../db'

function Home() {
  return (
    <Box top="30px" mt={68}>
      <Banner cards={cards} />
      <HomeContent />
      <Footer />
    </Box>
  )
}

export default Home
