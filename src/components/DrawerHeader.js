import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "react-native-elements";
import React from "react";
import Colors from "../constants/Colors";

export  default (props) => (
        <View style={styles.userInfoContainer}>
            <Avatar
                rounded
                icon={{type: 'material-community', name: 'newspaper', color: 'white'}}
                size='large'
                containerStyle={{marginVertical: 7}}/>
                <Text style={{color: 'white'}}>News App (1.0.0)</Text>
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
        backgroundColor: Colors.colorPrimary
    }
});
