import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import {View, Pressable, Text} from 'react-native';
import React from 'react';
import {styles} from "../styles/layout";

export default function PlaygroundScreen(props) {
    const randomWidth = useSharedValue(10);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config),
        };
    });

    return (
        <View
            {...props}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <Animated.View
                style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
            />
            <Pressable
                style={styles.buttonPrimary}
                onPress={() => {
                    console.log(randomWidth.value);
                    randomWidth.value = Math.random() * 350;
                }}
            >
                <Text style={styles.buttonTextPrimary}>Resize</Text>
            </Pressable>
        </View>
    );
}
