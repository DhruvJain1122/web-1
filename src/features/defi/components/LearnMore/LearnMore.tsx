import { Box, Flex } from '@chakra-ui/layout'
import { Button, VStack } from '@chakra-ui/react'
import osmosis from 'assets/osmosis.svg'
import { Text } from 'components/Text'

import { DefiModalHeader } from '../DefiModalHeader/DefiModalHeader'

export const LearnMore = () => {
  return (
    <Box pt='36px' pb='20px' px='24px'>
      <Flex
        direction='column'
        maxWidth='395px'
        height='470px'
        alignItems='center'
        justifyContent='space-between'
      >
        <DefiModalHeader
          headerImageSrc={osmosis}
          headerText={'defi.learnMore.headers.0'}
          headerImageWidth='120px'
        />
        <Box textAlign='left'>
          <Text
            translation='defi.learnMore.bodies.rateFluctuationInfo'
            color='gray.500'
            fontWeight='semibold'
          />
        </Box>
        <Box textAlign='left'>
          <Text
            translation='defi.learnMore.bodies.amountStakingInfo'
            color='gray.500'
            fontWeight='semibold'
          />
        </Box>
        <Box textAlign='left'>
          <Text
            translation='defi.learnMore.bodies.withdrawInfo'
            color='gray.500'
            fontWeight='semibold'
          />
        </Box>

        <Box width='100%'>
          <Button
            size='lg'
            zIndex={1}
            width='100%'
            colorScheme='blue'
            onClick={() => 'Start Staking'}
          >
            <Text translation='defi.learnMore.next' />
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
