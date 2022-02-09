import { Box, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import osmosis from 'assets/osmosis.svg'
import { Text } from 'components/Text'

import { DefiModalHeader } from '../DefiModalHeader/DefiModalHeader'

export const LearnMore = () => {
  const history = useHistory()
  const location = useLocation()
  const params = useParams()

  const handleNextClick = () => {
    history.push({
      pathname: `/defi/vault/cosmos/learn-more`,
      search: '?step=2',
      state: { background: location }
    })
  }

  console.log({ location })

  return (
    <Box pt='36px' pb='20px' px='24px'>
      <Flex
        direction='column'
        maxWidth='395px'
        height='520px'
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
            fontSize='15px'
          />
        </Box>
        <Box textAlign='left'>
          <Text
            translation='defi.learnMore.bodies.amountStakingInfo'
            color='gray.500'
            fontWeight='semibold'
            fontSize='15px'
          />
        </Box>
        <Box textAlign='left'>
          <Text
            translation='defi.learnMore.bodies.withdrawInfo'
            color='gray.500'
            fontWeight='semibold'
            fontSize='15px'
          />
        </Box>

        <Box width='100%'>
          <Button size='lg' zIndex={1} width='100%' colorScheme='blue' onClick={handleNextClick}>
            <Text translation='defi.learnMore.next' />
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
