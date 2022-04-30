import {Button, Platform, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";

const Screen = Platform.select({
    web: () => View,
    native: () => View,
})();

const HomeScreen = ({ navigation: { navigate } }) => {
    return  <Screen
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Welcome to {Platform.OS}</Text>
        <Button color={Colors.navy} onPress={() => navigate('Playground')} title="Open Menu" />
    </Screen>
}

export default HomeScreen;
