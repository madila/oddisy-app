import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Animated} from "react-native";
import SettingsScreen from "../views/settings";
import Tabs from "../navigation/tabs";
import WelcomeScreen from "../views/WelcomeScreen";

const Stack = createNativeStackNavigator();

const config = {
    animation: 'timing',
    config: {
        duration: 8000,
    },
};

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            })
            : 0
    );

    return {
        cardStyle: {
            transform: [
                {
                    translateX: Animated.multiply(
                        progress.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [
                                screen.width, // Focused, but offscreen in the beginning
                                0, // Fully focused
                                screen.width * -0.3, // Fully unfocused
                            ],
                            extrapolate: 'clamp',
                        }),
                        inverted
                    ),
                },
            ],
        },
    };
};

export default function MainNavigation({children}) {
    return (
        <NavigationContainer>
            {children}
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: true,
                    presentation: 'card'
                }}
            >
                <Stack.Screen name="Home" component={Tabs}
                              options={{
                                  cardStyleInterpolator: forSlide,
                                  gestureEnabled: true,
                                  animationEnabled: true,
                                  transitionSpec: {
                                      open: config,
                                      close: config,
                                  },
                              }}
                />
                <Stack.Screen name="Settings"
                              component={SettingsScreen}
                              options={{
                                  cardStyleInterpolator: forSlide,
                                  gestureEnabled: true,
                                  animationEnabled: true,
                                  transitionSpec: {
                                      open: config,
                                      close: config,
                                  },
                              }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
