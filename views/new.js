import React, {useState} from 'react';
import {Button, Platform, Pressable, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";
import PanPinch from 'react-native-pan-pinch';

const NewScreen = ({ navigation: { navigate } }) => {

    const [dimensions, setDimensions] = useState([]);

    const handleLayout = (ev) => {
        const {width, height} = ev.nativeEvent.layout;
        setDimensions([width, height]);
    }

    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Home</Text>
        <View
            style={{alignItems: 'center'}}
            onLayout={handleLayout}
        >
            <PanPinch containerDimensions={dimensions}>
                <Text style={styles.buttonTextPrimary}>Settings</Text>
            </PanPinch>
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
