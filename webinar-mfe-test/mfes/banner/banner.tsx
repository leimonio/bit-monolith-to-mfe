import React, { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

export type BannerProps = {
  cards: Card[]
}

type Card = {
  id: string
  image: string
}

type SliderType = {
  slickPrev: () => void
  slickNext: () => void
}

// eslint-disable-next-line @typescript-eslint/no-use-before-define
Banner.defaultProps = {
  cards: [],
}

const slidersSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export function Banner({ cards }: BannerProps) {
  const [slider, setSlider] = useState<SliderType | undefined>(undefined)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  return (
    <Box position="relative" height="650px" width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...slidersSettings} ref={(sliderEl) => setSlider(sliderEl)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height="2xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                border="1px soild red"
                w="full"
                position="absolute"
                color="white"
                top="15%"
                transform="translate(0, -50%)"
              />
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
