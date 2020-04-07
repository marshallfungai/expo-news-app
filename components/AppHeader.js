import React, {Component} from 'react';
import {Image, Platform, StatusBar} from 'react-native';
import propTypes from 'prop-types';
import {Body, Button, Header, Icon, Left, Right} from 'native-base';

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
    }

    handleModalClose() {
        return this.props.onModalClose();
    }

    render() {

        let {title, isHome, isModal, hastabs} = this.props;

        return (

            <Header
                androidStatusBarColor={'#283a51'}
                iosBarStyle={'light-content'}
                hasTabs={hastabs}
                style={{backgroundColor:'#3a5475', marginTop: Platform.OS === 'android' ? 0 : 20}}>
                <Left>
                    {
                        isHome?
                            <Button transparent onPress= {this.props.navigation.openDrawer}>
                                <Icon name='menu' style={{color: '#fff'}}/>
                            </Button>:
                            isModal?
                                <Button transparent onPress={this.handleModalClose}>
                                    <Icon name='close' />
                                </Button>:
                                <Button transparent >
                                    <Icon name='arrow-back' style={{color: '#fff'}}/>
                                </Button>

                    }

                </Left>

                <Body>
                    <Image  style={{marginTop:10, marginBottom:20}}  source={require('../assets/img/haberci-logo.png')} />
                </Body>
                <Right>

                </Right>

            </Header>

        );
    }
}

AppHeader.propTypes = {
    hastabs: propTypes.bool,
    isHome: propTypes.bool
};

AppHeader.defaultProps = {
    hastabs: false,
    isHome: false
};
