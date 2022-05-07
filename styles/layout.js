import React from 'react';
import {StyleSheet} from "react-native";
import {Colors} from "./constants/colors";
import {Fonts} from "./constants/fonts";

export const styles = StyleSheet.create({
    animation: {width: 250, aspectRatio: 1},
    text: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: Fonts.medium
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
