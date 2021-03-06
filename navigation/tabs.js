import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors} from "../styles/constants/colors";
import {Fonts} from "../styles/constants/fonts";
import {styles} from "../styles/layout";
import {Feather} from "@expo/vector-icons";
import TaskScreen from "../views/tasks";
import PlaygroundScreen from "../views/playground";
import React from "react";
import NewScreen from "../views/new";
import ZoomView from "../views/zoomview";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
    return (
        <Tab.Navigator
            {...props}
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    color: Colors.offBlack,
                    fontFamily: Fonts.medium,
                },
                tabBarActiveTintColor: Colors.offBlack,
                tabBarInactiveTintColor: Colors.offBlack,
                tabBarActiveBackgroundColor: Colors.brightYellow,
                tabBarInactiveBackgroundColor: Colors.yellow,
                tabBarItemStyle: {
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5
                },
                tabBarStyle: {
                    backgroundColor: Colors.yellow,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 5,
                    paddingTop: 5,
                    border: 0
                }
            }}
            sceneContainerStyle={styles.screenContainer}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Today',
                    tabBarIcon: () => {
                        return <Feather name="settings" size={18} color={Colors.offBlack} />
                    },
                }}
                name="Today" component={ZoomView}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => {
                        return <Feather name="circle" size={18} color={Colors.offBlack} />
                    },
                }}
                name="Home" component={NewScreen}/>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Journeys',
                    tabBarIcon: () => {
                        return <Feather name="check-circle" size={18} color={Colors.offBlack} />
                    },
                }}
                name="Journeys" component={TaskScreen}/>
        </Tab.Navigator>
    );
}

export default Tabs;
