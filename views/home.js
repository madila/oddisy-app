import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {styles} from "../styles/layout";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {BodoniModa_400Regular, BodoniModa_500Medium} from "@expo-google-fonts/bodoni-moda";

const HomeScreen = ({ navigation: { navigate } }) => {


    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    BodoniModa_400Regular,
                    BodoniModa_500Medium
                });
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return  <View
        onLayout={onLayoutRootView}
        style={styles.rootContainer}>
            <Text>Something</Text>
    </View>
}

export default HomeScreen;
