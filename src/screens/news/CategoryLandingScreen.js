import React, {PureComponent} from 'react';
import { StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class CategoryLandingScreen extends PureComponent{

    render() {
        const { route } = this.props
        console.log(route)
        const category = route.params.category
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text> {category} News Landing Screen</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
