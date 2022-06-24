import React, {useState} from 'react';
import {View} from "react-native";
import {styles} from "../styles/layout";
import Box from "./Box";
import {ReactNativeZoomableView} from "@openspacelabs/react-native-zoomable-view";

const NewScreen = ({ navigation: { navigate } }) => {

    return <View
            style={[styles.container, {overflow: "hidden"}]}>
            <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                style={{
                    padding: 10,
                    backgroundColor: '#0B2D64',
                }}
            >
                <Box/>
            </ReactNativeZoomableView>
        </View>
}

export default NewScreen;
