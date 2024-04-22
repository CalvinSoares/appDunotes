import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeStacKNavigator from "./home-stack-navigator";
import CompletedScreen from "screens/completed-screen";
import TodayScreen from "screens/today-screen";
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "@shopify/restyle";
import CategoriesStacKNavigator from "./categories-stack-navigator";


const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
    const theme = useTheme()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStacKNavigator}
                options={
                    {
                        title: "Home",
                        tabBarIcon: () => (
                            <Octicons name="home" size={24} color="black" />

                        ),
                        headerShown: false,
                    }
                }
            />
            <Tab.Screen 
                name="Completed" 
                component={CompletedScreen}
                options={
                    {
                        title: "Completed",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="robot-happy-outline" size={24} color="black" />

                        ),
                        headerShown: false,
                    }
                }
            />
            <Tab.Screen 
                name="Today"
                component={TodayScreen}
                options={
                    {
                        title: "Today",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="calendar-today" size={24} color="black" />
                        ),
                        headerShown: false,
                    }
                }
            />
            <Tab.Screen 
                name="CategoriesStack"  
                component={CategoriesStacKNavigator}
                options={
                    {
                        title: "Categories",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="format-list-bulleted-square" size={24} color="black" />
                        ),
                        headerShown: false,
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
