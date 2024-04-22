import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Text } from 'utils/theme'
import { AuthScreenNavigationType } from 'navigation/types'
import SafeAreaWrapper from 'components/shared/safe-area-wrapper'
import Input from 'components/shared/input'
import ButtonComponent from 'components/shared/button'
import { Controller, useForm } from "react-hook-form"
import { Pressable } from 'react-native'
import useUserGlobalStore from 'store/useUserGlobalStore'
import { loginUser } from 'services/api'
import { IUser } from 'types'

const SignInScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()

    const navigateToSignUpScreen = () => {
        navigation.navigate('SignUp')
    }

    const { updateUser } = useUserGlobalStore()
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<Omit<IUser, "name">>({
      defaultValues: {
        email: "",
        password: "",
      },
  })

  const onSubmit = async (data: Omit<IUser, "name">) => {
    console.log(`data dwad`, JSON.stringify(data, null, 2))
    try {
      const { email, password } = data
      const _user = await loginUser({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })
      updateUser({
        email: _user.email,
        name: _user.name,
      })
    } catch (error) {}
  }

  return (
    <SafeAreaWrapper >
      <Box flex={1} backgroundColor='gray900'>
        <Box flex={1} px='5.5' justifyContent='center' backgroundColor='gray900'>
          <Text variant='text3Xl' color='gray250' fontWeight='700' mb='6'>Bem vindo novamente!</Text>
          
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
                error={errors.password}
                secureTextEntry
              />
            )}
            name="password"
          />
        
          <Box my='5.5' >
            <ButtonComponent label='Login' onPress={handleSubmit(onSubmit)} uppercase/>
          </Box>

          <Box my='2'>
            <Pressable onPress={navigateToSignUpScreen}>
              <Text color='white' textAlign='left'>
                Primeira vez por aqui? <Text variant='textBase' color='purple300'>Criar Conta</Text>
              </Text>
            </Pressable>
          </Box>

          
        </Box>
      </Box>
      
    </SafeAreaWrapper>
    
  )
}

export default SignInScreen