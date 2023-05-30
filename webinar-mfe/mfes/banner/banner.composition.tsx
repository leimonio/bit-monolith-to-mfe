import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Banner } from './banner'
import { cards } from './fixtures/cards'

export const BannerBasic = () => (
  <ChakraProvider>
    <Banner cards={cards} />
  </ChakraProvider>
)
