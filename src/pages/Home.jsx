import React from 'react'
import { Box } from '@chakra-ui/react'

// import { Banner } from '@konstantinos-bit/webinar-mfe-test.mfes.banner'
import { BannerErrorBoundary } from '../components/BannerErrorBoundary/BannerErrorBoundary'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'
import { cards } from '../db'

const RemoteBanner = React.lazy(() =>
  import('mfe_video_plus_banner/Banner')
    .then((mod) => ({
      default: mod.Banner,
    }))
    .catch((error) =>
      console.error('loading module mfe_video_plus_banner/Banner failed')
    )
)

function Home() {
  return (
    <Box top="30px" mt={68}>
      {/* <Banner cards={cards} /> */}
      <BannerErrorBoundary fallback={<>Error while loading Banner</>}>
        <React.Suspense fallback={<h4>Loading remote banner...</h4>}>
          <RemoteBanner cards={cards} />
        </React.Suspense>
      </BannerErrorBoundary>
      <HomeContent />
      <Footer />
    </Box>
  )
}

export default Home
