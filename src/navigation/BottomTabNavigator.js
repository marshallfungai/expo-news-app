import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import NewsDrawerNavigator from "./NewsDrawerNavigator";
import SettingsNavigator from "./SettingsNavigator";
import BookmarksNavigator from "./BookmarksNavigator";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'News';

export default function BottomTabNavigator({ navigation, route }) {
    navigation.setOptions({
        headerShown: false
    });

    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="News"
                component={NewsDrawerNavigator}
                options={{
                    title: 'News',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="newspaper" />,
                }}
            />

            <BottomTab.Screen
                name="Bookmarks"
                component={BookmarksNavigator}
                options={{
                    title: 'My Bookmarks',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="book-multiple" />,
                }}
            />

            {/*<BottomTab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="settings" />,
                }}
            />*/}
        </BottomTab.Navigator>
    );
}
