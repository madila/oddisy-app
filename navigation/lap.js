import React from 'react';
import {Animated, Pressable, StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from "../styles/constants/colors";

const BottomDrawer = ({ navigation: {goBack, navigate} }) => {

    const drawerStyles = StyleSheet.create({
        bottomView: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        modalView: {
            padding: 16,
            width: '100%',
            height: '100%',
            borderRadius: 5,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: Colors.card
        },
    });

    return (
        <View style={drawerStyles.bottomView}>
            <Pressable style={StyleSheet.absoluteFill} onPress={goBack} />
            <Animated.View style={drawerStyles.modalView}>
                <Button color={Colors.navy} onPress={() => navigate('Home')} title="Go Home" />
                <Text>Hello</Text>
            </Animated.View>
        </View>
    );
};

export default BottomDrawer;
