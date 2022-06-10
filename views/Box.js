// Box.js
import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";


const Box = ({animatedLeft, animatedTop, animatedZoom}) => {

    const dimensions = useWindowDimensions();

    console.log(dimensions);

    return (
        <Animated.View
            style={[styles.box, {
                // props.animatedLeft, props.animatedTop and props.animatedZoom were added
                // to this component by PanPinch. They are all of type Animated.Node.
                transform: [{
                    translateX: animatedLeft,
                }, {
                    translateY: animatedTop,
                }, {
                    scale: animatedZoom,
                }],
            }]}
        >
            <Text style={styles.text}>Galaxy Map</Text>
        </Animated.View>
    );


}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#0B2D64",
        width: 2400,
        height: 1600,
        borderRadius: 10
    },
    text: {
        position: 'absolute',
        left: 10,
        top: 10,
        color: Colors.white, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30
    },
});

export default Box;
