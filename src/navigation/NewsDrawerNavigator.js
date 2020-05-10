import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerContent from "../components/DrawerContent";
import MenuButton from "../components/MenuButton";
import DummyScreen from "../screens/utilities/LandingScreen";
import CategoryLandingScreen from "../screens/news/CategoryLandingScreen";

const Drawer = createDrawerNavigator();
const HeadlinesStack = createStackNavigator();

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
            component={HeadlinesNavigator }
            options={({ navigation, route }) => ({

            })}
        />
    </Drawer.Navigator>
)

const HeadlinesNavigator = () => (
    <HeadlinesStack.Navigator
        initialRouteName="Landing"
        headerMode="screen"
        screenOptions={{

        }}>

        <HeadlinesStack.Screen
            name="Landing"
            component={CategoryLandingScreen}
            initialParams={{ category: 'latest' }}
            options={({ navigation, route }) => ({
                headerTitle: route.params ? route.params.category : 'latest',
                headerTitleStyle: {textTransform: 'capitalize'},
                headerLeft: () => ( <MenuButton navigation={navigation}/> ),
            })}
        />

        <HeadlinesStack.Screen
            name="Dummy"
            component={DummyScreen}
            options={({ navigation, route }) => ({
                headerTitle: 'NewsDetail',
            })}
        />
    </HeadlinesStack.Navigator>
)
