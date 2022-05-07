import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {styles} from "../styles/layout";
import {Fonts} from "../styles/constants/fonts";
import { useWindowDimensions } from 'react-native';

const SettingsScreen = ({navigation: {goBack}}) => {
    return <View
        style={settingsStyle.container}>
        <View style={settingsStyle.innerContainer}>
            <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Settings</Text>
            <View
                style={{alignItems: 'center'}}
            >
                <Pressable
                    style={styles.buttonPrimary}
                    onPress={goBack}
                >
                    <Text style={styles.buttonTextPrimary}>Back</Text>
                </Pressable>
            </View>
        </View>
    </View>
}

const settingsStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        padding: 10,
    },
    innerContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SettingsScreen;
