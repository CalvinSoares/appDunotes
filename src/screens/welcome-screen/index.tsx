
import { useNavigation } from '@react-navigation/native'
import Button from 'components/shared/button'
import SafeAreaWrapper from 'components/shared/safe-area-wrapper'
import { AuthScreenNavigationType } from 'navigation/types'
import { Image } from 'react-native'
import { Box, Text } from 'utils/theme'

const WelcomeScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()

    const navigateToSignInScreen = () => {
        navigation.navigate('SignIn')
    }
    const navigateToSignUpScreen = () => {
        navigation.navigate('SignUp')
    }

  return (
    <SafeAreaWrapper>
      <Box flex={1} backgroundColor='gray900'>
        <Box flex={1} justifyContent='center' >
        <Box alignItems='center' mb="4">
          <Image 
            source={require('../../../assets/logo.png')}
            style={{
              width: 280,
              height: 150,
              resizeMode: 'contain',
            }}
          />
        </Box>        
        <Text 
          textAlign='center' 
          variant='textXl' 
          fontWeight='700' 
          color='gray200'
        > 
          Quer organizar suas tarefas e escrever seus pensamentos como nunca antes? 
        </Text>
        <Box mt='3.5' mx='10'>
          <Button 
            label='Comece agora' 
            onPress={navigateToSignInScreen}
          />
        </Box>
        
      </Box>
      <Text 
          textAlign='center' 
          variant='textXl' 
          fontWeight='700' 
          color='gray200'
        >
          Você quer ser mais produtivo?
      </Text>
      </Box>
      
    </SafeAreaWrapper>
    
  )
}

export default WelcomeScreen