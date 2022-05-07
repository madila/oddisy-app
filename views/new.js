import React from 'react';
import {Button, Platform, Pressable, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";

const NewScreen = ({ navigation: { navigate } }) => {
    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Home</Text>
        <View
            style={{alignItems: 'center'}}
        >
            <Pressable
                style={styles.buttonPrimary}
                onPress={() => { navigate('Settings') }}
            >
                <Text style={styles.buttonTextPrimary}>Settings</Text>
            </Pressable>
        </View>
    </View>
}

export default NewScreen;
