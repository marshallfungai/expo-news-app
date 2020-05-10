import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from "../screens/bookmarks/LandingScreen";
import NewsDetail from "../screens/utilities/LandingScreen";

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
                headerTitle: 'Bookmarks',
            })}
        />

        <HeadLineStack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={({ navigation, route }) => ({
                headerTitle: 'News Detail',
            })}
        />
    </HeadLineStack.Navigator>
)
