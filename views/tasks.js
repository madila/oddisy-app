import {Text, View} from "react-native";
import {Colors} from "../styles/constants/colors";
import {styles} from "../styles/layout";
import {Fonts} from "../styles/constants/fonts";

const TasksScreen = () => {
    return  <View
        style={styles.container}>
        <Text style={{color: Colors.offBlack, fontFamily: Fonts.regular, textAlign: 'center', fontSize: 30}}>Tasks</Text>
    </View>
}

export default TasksScreen;
