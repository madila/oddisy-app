import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, Text, View} from "react-native";
import {styles} from "../styles/layout";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";

const HomeScreen = ({ navigation: { navigate } }) => {

    return  <View
        style={styles.rootContainer}>
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

export default HomeScreen;
