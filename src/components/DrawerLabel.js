import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {Badge, Divider, ListItem} from "react-native-elements";
import DrawerItem from "@react-navigation/drawer/src/views/DrawerItem";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class DrawerLabel extends PureComponent{
    render() {
        const item = this.props.item;
        return (
                <ListItem
                    bottomDivider={false}
                    containerStyle={{padding: 0}}
                    title={
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <DrawerItem
                                    onPress={() => this.props.navHandler(item.route, item.category)}
                                    icon={() => <MaterialCommunityIcons
                                        name={item.icon} size={24}
                                        color='black'/>
                                    }
                                    style={{flex: 1}}
                                    label={() => (
                                        <Text style={styles.labelDefinition}>{item.label}</Text>
                                    )}
                                />
                            </View>
                            <Divider style={{backgroundColor: 'black'}}/>
                        </View>
                    }
                />
        );
    }
}

const styles = StyleSheet.create({
    labelDefinition: {
        color: 'black',
        textTransform: 'capitalize',
    },
});
