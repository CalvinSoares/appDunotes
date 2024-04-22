import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthStackParamList } from "./types"
import SignInScreen from "screens/sign-in-screen"
import SignUpScreen from "screens/sign-up-screen"
import WelcomeScreen from "screens/welcome-screen"

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStacKNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false
            }}
        />
        <Stack.Screen 
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
        />
    </Stack.Navigator>
  )
}

export default AuthStacKNavigator