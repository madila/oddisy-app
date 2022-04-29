import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";

import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

export default function Clickable({onPress = () => {}, color, title}) {
    return (
        <TouchableHighlight {...onPress}>
            <Text style={{
                backgroundColor: color,
                color: 'white',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 5,
                cursor: 'pointer',
                fontFamily: Fonts.semibold,
                textAlign: 'center',
                fontSize: 30
            }}>{title}</Text>
        </TouchableHighlight>
    );
}
