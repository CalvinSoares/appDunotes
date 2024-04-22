import { NavigationContainer } from '@react-navigation/native'
import AppStacKNavigator from './app-stack-navigator'
import useUserGlobalStore from 'store/useUserGlobalStore'
import AuthStacKNavigator from './auth-stack-navigator'

const Navigation = () => {
  const { user } = useUserGlobalStore()

  return (
    <NavigationContainer>
      {user ? <AppStacKNavigator /> : <AuthStacKNavigator />}
    </NavigationContainer>
  )
}

export default Navigation