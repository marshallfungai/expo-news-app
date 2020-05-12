import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerContent from "../components/DrawerContent";
import MenuButton from "../components/MenuButton";
import NewsDetail from "../screens/utilities/LandingScreen";
import CategoryLandingScreen from "../screens/news/CategoryLandingScreen";
import Colors from "../constants/Colors";

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
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(12,71,161,.9)',
            },
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
            name="NewsDetail"
            component={NewsDetail}
            options={({ navigation, route }) => ({
                headerTitle: null,
                headerTransparent: true,
            })}
        />
    </HeadlinesStack.Navigator>
)
