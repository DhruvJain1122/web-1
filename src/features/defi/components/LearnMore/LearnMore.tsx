import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/react'
import { useSteps } from 'chakra-ui-steps'
import { useHistory, useLocation } from 'react-router-dom'
import osmosis from 'assets/osmosis.svg'
import { CarouselDots } from 'components/CarouselDots/CarouselDots'
import { SlideTransition } from 'components/SlideTransition'
import { Text } from 'components/Text'

import { DefiModalHeader } from '../DefiModalHeader/DefiModalHeader'

const STEPS_LENGTH = 3
const STEP_TO_ELEMENTS_MAPPING = {
  1: {
    bodies: [
      'defi.learnMore.bodies.rateFluctuationInfo',
      'defi.learnMore.bodies.amountStakingInfo',
      'defi.learnMore.bodies.withdrawInfo'
    ],
    headerImageSrc: osmosis,
    headerImageWidth: '120px'
  },
  2: {
    bodies: ['defi.learnMore.bodies.unbondingInfo'],
    headerImageSrc: osmosis,
    headerImageWidth: '120px'
  },
  3: {
    bodies: ['defi.learnMore.bodies.slashingInfo', 'defi.learnMore.bodies.partnerInfo'],
    headerImageSrc: osmosis,
    headerImageWidth: '120px'
  }
}

export const LearnMore = () => {
  const history = useHistory()
  const location = useLocation()

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 1
  })

  const isLastStep = activeStep === STEPS_LENGTH

  const handleNextOrCloseClick = () => {
    if (isLastStep) {
      return history.push({
        pathname: `/assets/ethereum`
      })
    }

    nextStep()
    history.push({
      pathname: `/defi/vault/cosmos/learn-more`,
      search: `?step=${activeStep + 1}`,
      state: { background: location }
    })
  }

  return (
    <SlideTransition key={activeStep}>
      <IconButton
        variant='ghost'
        color='white'
        icon={<ArrowBackIcon />}
        aria-label={'common.back'}
        position='absolute'
        top={2}
        left={3}
        fontSize='xl'
        size='sm'
        onClick={() => {
          history.goBack()
        }}
      />
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
            headerText={`defi.learnMore.headers.${activeStep - 1}`}
            headerImageWidth='120px'
          />
          {STEP_TO_ELEMENTS_MAPPING[activeStep].bodies.map(body => (
            <Box textAlign='left'>
              <Text translation={body} color='gray.500' fontWeight='semibold' fontSize='15px' />
            </Box>
          ))}
          <Box width='100%'>
            <Button
              size='lg'
              zIndex={1}
              width='100%'
              colorScheme='blue'
              onClick={handleNextOrCloseClick}
            >
              <Text translation={isLastStep ? 'defi.learnMore.close' : 'defi.learnMore.next'} />
            </Button>
          </Box>
          <Box width='46px'>
            <CarouselDots length={STEPS_LENGTH} activeIndex={activeStep} />
          </Box>
        </Flex>
      </Box>
    </SlideTransition>
  )
}
