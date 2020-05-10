import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerContent from "../components/DrawerContent";
import MenuButton from "../components/MenuButton";
import LandingScreen from "../screens/news/LandingScreen";
import DummyScreen from "../screens/utilities/LandingScreen";
import CategoryLandingScreen from "../screens/news/CategoryLandingScreen";
import SettingsNavigator from "./SettingsNavigator";
import BookmarksNavigator from "./BookmarksNavigator";

const Drawer = createDrawerNavigator();
const HeadLineStack = createStackNavigator();
const CategoryStack = createStackNavigator();

export default () => (
    <Drawer.Navigator
        initialRouteName='HeadlinesNewsListing'
        drawerType='slide'
        drawerContent={props => <NavigationDrawerContent {...props} />}
        drawerContentOptions={{
            itemStyle: { marginVertical: 0 },
        }}
        drawerStyle={{

        }}>

        <Drawer.Screen
            name="HeadlinesNewsListing"
            component={HeadlinesNavigator}
            options={({ navigation, route }) => ({

            })}
        />

        <Drawer.Screen
            name="CategoryNewsListing"
            component={CategoriesNavigator}
            options={({ navigation, route }) => ({

            })}
        />
    </Drawer.Navigator>
)

const HeadlinesNavigator = () => (
    <HeadLineStack.Navigator
        initialRouteName="Landing"
        headerMode="screen"
        screenOptions={{

        }}>

        <HeadLineStack.Screen
            name="Landing"
            component={LandingScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'Top Headlines',
                headerLeft: () => ( <MenuButton navigation={navigation}/> ),
            })}
        />

        <HeadLineStack.Screen
            name="Dummy"
            component={DummyScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'NewsDetail',
            })}
        />
    </HeadLineStack.Navigator>
);

const CategoriesNavigator = () => (
    <CategoryStack.Navigator
        initialRouteName="Landing"
        headerMode="screen"
        screenOptions={{

        }}>

        <CategoryStack.Screen
            name="Landing"
            component={CategoryLandingScreen}
            options={({ navigation, route }) => ({
                headerTitle: route.params.category,
                headerTitleStyle: {textTransform: 'capitalize'},
                headerLeft: () => ( <MenuButton navigation={navigation}/> ),
            })}
        />

        <CategoryStack.Screen
            name="Dummy"
            component={DummyScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'NewsDetail',
            })}
        />
    </CategoryStack.Navigator>
)
