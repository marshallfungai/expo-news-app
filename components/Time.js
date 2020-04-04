import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, List, ListItem, Text, Left, Body, Right, Button, View, Icon } from 'native-base';
import moment from 'moment';

export default class Time extends Component {

    constructor(props){
        super(props);
        this.date = props.time;
    }

    render() {
        
        const time = moment(this.date || moment.now()).fromNow();
        return (

            <Text style={{color:'#cc232a'}} note> {time}</Text>
        );
    }
}