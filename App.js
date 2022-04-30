import {StatusBar} from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts, BodoniModa_400Regular, BodoniModa_500Medium} from "@expo-google-fonts/bodoni-moda";
import MainNavigation from "./navigation/main";
import Tabs from "./navigation/tabs";

export default function App() {

    let [fontsLoaded] = useFonts({
        BodoniModa_400Regular,
        BodoniModa_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <MainNavigation>
                <StatusBar style="auto"/>
            </MainNavigation>
        );
    }
}
