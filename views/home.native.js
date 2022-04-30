import {Button, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";

const HomeScreen = ({ navigation: { navigate } }) => {
    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Welcome</Text>
        <Button color={Colors.navy} onPress={() => navigate('Playground')} title="Open Menu" />
    </View>
}

export default HomeScreen;
