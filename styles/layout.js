import React from 'react';
import {Platform, StyleSheet} from "react-native";
import {Colors} from "./constants/colors";
import {Fonts} from "./constants/fonts";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    animation: {width: 250, aspectRatio: 1},
    text: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: Fonts.medium
    },
    smallText: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: Fonts.regular
    },
    textTitle: {
        color: Colors.offBlack,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        fontSize: 30
    },
    settingsContainer: {
        backgroundColor: Colors.grey,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: Platform.OS === 'web' ? 10 : Constants.statusBarHeight,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.card,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
    },
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.offWhite,
        justifyContent: 'center',
        padding: 10,
    },
    innerContainer: {
        paddingTop: Constants.statusBarHeight
    },
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.offBlack
    },
    buttonTextPrimary: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: Fonts.medium,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: Colors.white
    }
});
