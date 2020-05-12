import React, {PureComponent} from 'react';
import {View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class MenuButton extends PureComponent{
    render() {
        return (
            <View style={{flex: 0, flexDirection: 'row'}}>
                <MaterialCommunityIcons
                    onPress={() => this._handleMenuButton()}
                    name={'menu'}
                    color={'white'}
                    size={30}
                    style={{paddingLeft: 20}}/>
            </View>
        );
    }

    _handleMenuButton = () => {
        this.props.navigation.toggleDrawer();
    }
}
