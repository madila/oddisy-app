import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Colors} from "./styles/constants/colors";
import {styles} from "./styles/layout";
import AppLoading from 'expo-app-loading';
import {useFonts, Sora_400Regular, Sora_300Light, Sora_500Medium} from "@expo-google-fonts/sora";


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNavigation from "./navigation/main";
import HomeScreen from "./views/home";
import SettingsScreen from "./views/settings";
import TaskScreen from "./views/tasks";
import {Fonts} from "./styles/constants/fonts";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    color: Colors.offBlack,
                    textTransform: 'uppercase',
                    fontFamily: Fonts.medium,
                },
                tabBarActiveTintColor: Colors.offBlack,
                tabBarInactiveTintColor: Colors.offBlack,
                tabBarActiveBackgroundColor: Colors.brightYellow,
                tabBarInactiveBackgroundColor: Colors.yellow,
                tabBarItemStyle: {
                    borderRadius: 5
                },
                tabBarStyle: {
                    backgroundColor: Colors.yellow,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 5,
                    paddingTop: 5,
                    border: 0
                }
        }}
            sceneContainerStyle={styles.container}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (null),
                }}
                name="Home" component={HomeScreen}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (null),
                }}
                name="Settings" component={SettingsScreen}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Tasks',
                    tabBarIcon: ({ color, size }) => (null),
                }}
                name="Tasks" component={TaskScreen}/>
        </Tab.Navigator>
    );
}


export default function App() {

    let [fontsLoaded] = useFonts({
        Sora_400Regular,
        Sora_300Light,
        Sora_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <MainNavigation>
                <StatusBar style="auto"/>
                <Tabs />
            </MainNavigation>
        );
    }
}
