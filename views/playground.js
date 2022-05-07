
import {View, Pressable, Text, Button} from 'react-native';
import React from 'react';
import {styles} from "../styles/layout";
import {Colors} from "../styles/constants/colors";

export default function PlaygroundScreen({navigation: {navigate}}) {

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <View
                style={{ width: 100, height: 100, borderRadius: 300, backgroundColor: Colors.grey, margin: 30 }}
            />

        </View>
    );
}
