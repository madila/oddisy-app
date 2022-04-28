import {StyleSheet} from "react-native";
import {Colors} from "./constants/colors";

export const styles = StyleSheet.create({
    animation: {width: 250, aspectRatio: 1},
    container: {
        flex: 1,
        backgroundColor: Colors.yellow,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
