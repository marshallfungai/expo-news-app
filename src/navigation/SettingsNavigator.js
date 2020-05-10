import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuButton from "../components/MenuButton";
import LandingScreen from "../screens/settings/LandingScreen";
import DummyScreen from "../screens/utilities/LandingScreen";

const HeadLineStack = createStackNavigator();

export default () => (
    <HeadLineStack.Navigator
        initialRouteName="Landing"
        headerMode="screen"
        screenOptions={{

        }}>

        <HeadLineStack.Screen
            name="Landing"
            component={LandingScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'Settings',
            })}
        />

        <HeadLineStack.Screen
            name="Dummy"
            component={DummyScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'Dummy',
            })}
        />
    </HeadLineStack.Navigator>
)
