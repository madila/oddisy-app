import {StatusBar} from 'expo-status-bar';
import React from 'react';
import MainNavigation from "./navigation/main";

export default function App() {
    return (
        <MainNavigation>
            <StatusBar style="auto"/>
        </MainNavigation>
    );
}
