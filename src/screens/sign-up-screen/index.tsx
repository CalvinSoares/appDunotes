import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Text } from 'utils/theme'
import { AuthScreenNavigationType } from 'navigation/types'
import SafeAreaWrapper from 'components/shared/safe-area-wrapper'
import Input from 'components/shared/input'
import ButtonComponent from 'components/shared/button'
import { Pressable } from 'react-native'
import { Controller, useForm } from "react-hook-form"
import { registerUser} from 'services/api'
import { IUser } from 'types'

const SignUpScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()

    const navigateToSignInScreen = () => {
        navigation.navigate('SignIn')
    }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data

    await registerUser({
      email,
      name,
      password,
    })
    navigateToSignInScreen()
    } catch (err) {

    }
    
  }

  return (
    <SafeAreaWrapper >
      <Box flex={1} backgroundColor='gray900'>
        <Box flex={1} px='5.5' justifyContent='center' backgroundColor='gray900'>
          <Text variant='text3Xl' color='gray250' fontWeight='700' mb='6'>Bem vindo ao <Text color='purple700'>DuNotes</Text>!</Text>
          <Text variant='textXl' color='gray250' fontWeight='700' mb='6'>Sua jornada começa aqui.</Text>
          <Controller 
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
                error={errors.name}
              />
            )}
            name="name"

          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                error={errors.email}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                error={errors.name}
                secureTextEntry
              />
            )}
            name="password"
          />

          <Box my='5.5'>
            <ButtonComponent label='Register' onPress={handleSubmit(onSubmit)} uppercase/>
          </Box>

          <Box my='2'>
            <Pressable onPress={navigateToSignInScreen}>
              <Text color='white' textAlign='left'>
                Ja possui uma conta? <Text  variant='textBase' color='purple300'>Logar agora</Text>
              </Text>
            </Pressable>
          </Box>
         
        </Box>
      </Box>
      
    </SafeAreaWrapper>
    
  )
}

export default SignUpScreen