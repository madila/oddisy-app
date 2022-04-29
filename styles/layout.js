import {StyleSheet} from "react-native";
import {Colors} from "./constants/colors";
import {Fonts} from "./constants/fonts";

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
    buttonPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.offBlack
    },
    buttonTextPrimary: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: Fonts.medium,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: Colors.white
    }
});
