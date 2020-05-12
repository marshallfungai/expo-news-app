import React, {PureComponent} from 'react';
import {SafeAreaView} from "react-native";
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerHeader from "./DrawerHeader";
import DrawerLabel from "./DrawerLabel";

export default class NavigationDrawerContent extends PureComponent{
    render () {
        const menuItems = [
            {icon: 'newspaper', label: 'Top Headlines', category: 'latest', route: 'HeadlinesNewsListing'},
            {icon: 'coin', label: 'Business', category: 'business', route: 'HeadlinesNewsListing'},
            {icon: 'flask-outline', label: 'Science', category: 'science', route: 'HeadlinesNewsListing'},
            {icon: 'react', label: 'Technology', category: 'technology', route: 'HeadlinesNewsListing'},
            {icon: 'stethoscope', label: 'Health', category: 'health', route: 'HeadlinesNewsListing'},
            {icon: 'basketball', label: 'Sports', category: 'sports', route: 'HeadlinesNewsListing'},
            {icon: 'guitar-acoustic', label: 'Entertainment', category: 'entertainment', route: 'HeadlinesNewsListing'},
        ];
        return(
            <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerContentScrollView {...this.props} showsVerticalScrollIndicator={false}>
                    <DrawerHeader />

                    { menuItems.map((_item) => (
                            <DrawerLabel
                                key={JSON.stringify(_item)}
                                item={_item}
                                navHandler={this.navToDrawerScreen}/>
                        )
                    )}
                </DrawerContentScrollView>
            </SafeAreaView>
        )
    }

    navToDrawerScreen = (routeName, category) => {
        const {navigation} = this.props;
        navigation.navigate(routeName, {
            screen: 'Landing',
            params: {category: category}
        });
    };
}
