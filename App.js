import {StatusBar} from 'expo-status-bar';
import {View} from "react-native";
import React, {useCallback, useEffect, useState} from 'react';
import MainNavigation from "./navigation/main";
import * as SplashScreen from "expo-splash-screen";
import {BodoniModa_400Regular, BodoniModa_500Medium} from "@expo-google-fonts/bodoni-moda";
import {useFonts} from "expo-font";
import {GestureHandlerRootView} from "react-native-gesture-handler";


export default function App() {


    const [appReady, setAppReady] = useState(false);
    const [fontsLoaded] = useFonts({BodoniModa_400Regular, BodoniModa_500Medium});

    useEffect(() => {
        async function showSplashScreen() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();

            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppReady(true);
            }
        }

        showSplashScreen();
    }, []);

    useEffect(() => {
        // Once our data is ready, hide the Splash Screen
        const hideSplashScreen = async () => {
            await SplashScreen.hideAsync();
        }

        if (fontsLoaded && appReady) hideSplashScreen();
    }, [appReady, fontsLoaded])

    if (!appReady || !fontsLoaded) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <MainNavigation>
                <StatusBar style="auto"/>
            </MainNavigation>
        </GestureHandlerRootView>
    );
}
