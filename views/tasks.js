import {Button, Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {styles} from "../styles/layout";
import {Fonts} from "../styles/constants/fonts";

const TasksScreen = ({navigation: {navigate}}) => {
    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Tasks</Text>
        <Button color={Colors.navy} onPress={() => navigate('Home')} title="Open Menu" />
    </View>
}

export default TasksScreen;
