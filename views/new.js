import React, {useState} from 'react';
import {View} from "react-native";
import {styles} from "../styles/layout";
import Box from "./Box";
import PanPinch from 'react-native-pan-pinch';

const NewScreen = ({ navigation: { navigate } }) => {

    const [dimensions, setDimensions] = useState([]);

    const handleLayout = (ev) => {
        const {width, height} = ev.nativeEvent.layout;
        setDimensions([width, height]);
    }

    return <View
            style={[styles.container, {overflow: "hidden"}]}
            onLayout={handleLayout}>
            <PanPinch
                minScale={1}
                initialScale={1}
                contentDimensions={{width: 2400, height: 1600}}
                containerDimensions={dimensions}>
                <Box/>
            </PanPinch>
        </View>
}

export default NewScreen;
