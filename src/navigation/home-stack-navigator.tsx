import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeStackParamList } from "./types"
import HomeScreen from "screens/home-screen"
import EditTaskScreen from "screens/edit-task"

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeStacKNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="EditTask" 
          component={EditTaskScreen}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  )
}

export default HomeStacKNavigator