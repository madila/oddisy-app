import React, {useRef, useState} from "react";
import {Button, StyleSheet, Text, Animated, View} from "react-native";
// @ts-ignore
import {ReactNativeZoomableView} from "@openspacelabs/react-native-zoomable-view";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import Box from "./Box";

const ZoomView = () => {

    const zoomAnimatedValue = useRef(new Animated.Value(1)).current;
    const scale = Animated.divide(1, zoomAnimatedValue);
    const [showMarkers, setShowMarkers] = useState(false);
    const zoomableViewRef = useRef(null);

    // @ts-ignore
    return <View style={styles.container}>
        <View style={styles.zoomWrapper}>
            <ReactNativeZoomableView
                ref={zoomableViewRef}
                contentWidth={300}
                maxZoom={30}
                initialZoom={0.8}
                zoomAnimatedValue={zoomAnimatedValue}
                panBoundaryPadding={50}
                bindToBorders={false}
            >
                <>
                    <Box />
                    {showMarkers &&
                        [1, 2, 3].map((left) =>
                            [1, 2].map((top) => (
                                <Animated.View
                                    key={`${left}x${top}`}
                                    // These markers will move and zoom with the image, but will retain their size
                                    // because of the scale transformation.
                                    style={[
                                        styles.marker,
                                        { left: `${(left * 23) + Math.random() * 10}%`, top: `${(top * 40) + Math.random() * 10}%` },
                                        { transform: [{ scale }] },
                                    ]}
                                />
                            ))
                        )}
                </>
            </ReactNativeZoomableView>
        </View>

        <View style={styles.controlWrapperLeft}>
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.moveBy(-30, 0)} title="⬅️" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.moveBy(30, 0)} title="➡️" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.moveBy(0, -30)} title="⬆️" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.moveBy(0, 30)} title="⬇️" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.moveTo(300, 200)} title="Move to" />
        </View>

        <View style={styles.controlWrapperRight}>
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.zoomBy(-0.1)} title="-" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.zoomBy(0.1)} title="+" />
            <Button onPress={() => zoomableViewRef.current && zoomableViewRef.current.zoomTo(1)} title="reset" />
        </View>
    </View>;
}

const styles = StyleSheet.create({
    box: {
        width: 2400,
        height: 1600,
        borderRadius: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    caption: {

    },
    zoomWrapper: {
        backgroundColor: 'rgb(11,45,100)',
    },
    controlWrapperRight: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: Colors.white,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        fontSize: 30
    },
    controlWrapperLeft: {
        position: 'absolute',
        left: 10,
        top: 10,
        color: Colors.white,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        fontSize: 30
    },
    marker: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 20,
        height: 20,
        marginLeft: -10,
        marginTop: -10,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        borderWidth: 5,
        borderColor: 'rgba(11,45,100,0.6)'
    },
});

export default ZoomView;
