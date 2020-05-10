import React, {PureComponent} from "react";
import {Platform, StatusBar, StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import {fetchOfflineBookmarks} from "./store/actions/news";
import {connect} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

class WrapperClass extends PureComponent{
    async componentDidMount() {
        await this.props.fetchOfflineBookmarks();
    }

    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content"/>}
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={BottomTabNavigator}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => {
    return { };
};

const matchDispatchToProps = dispatch => {
    return {
        fetchOfflineBookmarks: () => dispatch(fetchOfflineBookmarks()),
    };
};

export default connect( mapStateToProps,  matchDispatchToProps )(WrapperClass);
