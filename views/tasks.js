import {Button, Pressable, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {styles} from "../styles/layout";
import {Fonts} from "../styles/constants/fonts";
import React from "react";

const TasksScreen = ({navigation: {navigate}}) => {
    return  <View
        style={styles.container}>
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
}

export default TasksScreen;
