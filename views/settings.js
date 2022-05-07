import React from 'react';
import {Button, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {styles} from "../styles/layout";
import {Fonts} from "../styles/constants/fonts";

const SettingsScreen = ({navigation: {navigate}}) => {
    return  <View
        style={{...styles.container, margin: 10, borderRadius: 5, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'black', padding: 10}}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Settings</Text>
        <Button color={Colors.navy} onPress={() => navigate('Home')} title="Back" />
    </View>
}

export default SettingsScreen;
