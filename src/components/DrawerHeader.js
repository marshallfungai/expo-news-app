import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "react-native-elements";
import React from "react";

export  default (props) => (
        <View style={styles.userInfoContainer}>
            <Avatar
                rounded
                icon={{type: 'material-community', name: 'newspaper', color: 'black'}}
                size='large'
                containerStyle={{marginVertical: 7}}/>
                <Text>News App (1.0.0)</Text>
        </View>
);

const styles = StyleSheet.create({
    userInfoContainer: {
        alignItems: 'center',
        marginTop: -4,
        marginBottom: 0,
        paddingVertical:10,
        padding: 20,
        width: '100%',
        flexDirection: 'column',
    }
});
