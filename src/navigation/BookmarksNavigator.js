import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from "../screens/bookmarks/LandingScreen";
import NewsDetail from "../screens/utilities/LandingScreen";
import Colors from "../constants/Colors";

const HeadLineStack = createStackNavigator();

export default () => (
    <HeadLineStack.Navigator
        initialRouteName="Landing"
        headerMode="screen"
        screenOptions={{
            headerTitleStyle:{
                color: 'white'
            },
            headerStyle: {
                backgroundColor: Colors.colorPrimary,
            },
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
