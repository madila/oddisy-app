import LottieView from "lottie-react-native";
import {styles} from "../../styles/layout";

const FireLottie = () => {
    return <LottieView
        style={styles.animation}
        autoPlay
        loop
        resizeMode="contain"
        source={require('./../assets/animations/fire.json')}
        // OR find more Lottie files @
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
    />
}
