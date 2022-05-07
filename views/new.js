import React from 'react';
import {Button, Platform, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";

const NewScreen = ({ navigation: { navigate } }) => {
    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Welcome to {Platform.OS}</Text>
        <Button color={Colors.navy} onPress={() => navigate('Settings')} title="Settings" />
    </View>
}

export default NewScreen;
