// Box.js
import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import Svg, { Circle, G } from 'react-native-svg';


const random = (min, max) => {
    const difference = max - min;
    return min + difference * Math.random();
}

const randomInt = (min, max) => {
    return Math.round(random(min, max));
}

const boxWidth = 2400;
const boxHeight = 2400;

const Planet = ({size, color, distance}) => {

    const [started, setStarted] = useState(false);

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    const rotation = new Animated.Value(0);
    const endRotation = 1;

    const rotatePlanet = () => {
        setStarted(true);
        Animated.sequence([
            Animated.timing(rotation, {
                useNativeDriver: true,
                duration: randomInt(20000, 80000),
                toValue: 1
            })]
        ).start(() => {
            // Logic whenever an iteration finishes...
            setStarted(false);
        });
    }

    useEffect(() => {
        rotatePlanet();
    }, [started]);


    // The orbit is centered and has a radius equal to our current distance
    return <AnimatedCircle
        style={{
            transformOrigin:'50% 50%',
            transform: [{
                rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [`0deg`, `360deg`],
                }),
            }],
        }}
        cx={boxWidth/2 + distance}
        cy={boxHeight/2}
        r={size}
        fill={color}
    />;
}

const Box = () => {

    let randomPlanetSize = () => randomInt(10, 50);
    let randomOrbitDistance = () => randomInt(100, 120);

    const starSize = randomInt(70, 120);

    const [bodies, setBodies] = useState([]);

    const randomItemInArray = (array) => {
        return array[randomInt(0, array.length - 1)];
    }

    const DrawStar = () => {
        // Note upper range of red exceeds 360
        const hueRange = randomItemInArray([[330, 390], [40, 60], [190, 240]]);

        let hue = randomInt(...hueRange);

        if (hue > 360) {
            hue = hue - 360;
        }

        const saturation = randomInt(90, 100);
        const lightness = randomInt(60, 80);
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        // The orbit is centered and has a radius equal to our current distance
        return <Circle
            cx={boxWidth/2}
            cy={boxHeight/2}
            r={starSize}
            fill={color}
        />;
    }

    useEffect(() => {
        // Set up our first planet
        let planetSize = randomPlanetSize();
        let orbitDistance = randomOrbitDistance() + starSize;

        let galaxy = [];

        // Keep adding planets until a planet's orbital distance and
        // size would lead to it extending past our canvas
        while(orbitDistance + planetSize < 1200) {
            // Prep our next planet so the while loop can check
            // whether it's in bounds
            galaxy.push({orbitDistance, planetSize});
            orbitDistance = orbitDistance + randomOrbitDistance();
            planetSize = randomPlanetSize();
        }

        setBodies(galaxy);
    }, []);

    const DrawOrbit = ({distance}) => {
        // The orbit is centered and has a radius equal to our current distance
        return <Circle
          cx={boxWidth/2}
          cy={boxHeight/2}
          r={distance}
          stroke="#ccc"
          fill="none"
        />;
    }

    const drawBody = ({orbitDistance, planetSize}) => {
        const hue = randomInt(0, 360);
        const saturation = randomInt(70, 100);
        const lightness = randomInt(50, 70);
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        return <G key={`body-${planetSize}-${orbitDistance}`}>
            <DrawOrbit distance={orbitDistance}></DrawOrbit>
            <Planet color={color} distance={orbitDistance} size={planetSize} />
        </G>
    }

    return (
        <View
            style={styles.box}
        >
            <View style={styles.boxContent}>
                <Text style={styles.text}>Galaxy Map</Text>
                <Svg
                    width={boxWidth}
                    height={boxHeight}
                    viewBox={`0 0 ${boxWidth} ${boxHeight}`}
                >
                    <G className={"js-svg-wrapper"}>
                        <DrawStar></DrawStar>
                        {bodies && bodies.map(drawBody)}
                    </G>
                </Svg>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    box: {
        width: 2400,
        height: 2400,
        borderRadius: 10,
        backgroundColor: "#0B2D64"
    },
    boxContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        height: "100%"
    },
    text: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        fontSize: 30
    },
    planet: {
        transformOrigin:'50% 50%'
    }
});

export default Box;
