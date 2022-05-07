
import {View, Pressable, Text, Button} from 'react-native';
import React from 'react';
import {styles} from "../styles/layout";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";

export default function PlaygroundScreen({navigation: {navigate}}) {

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Tasks</Text>
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
    );
}
