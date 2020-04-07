import React from 'react';
import {Text} from 'native-base';
import moment from 'moment';

export const TimeOnHeader = (props)  => {
    const time = moment(props.date || moment.now()).fromNow();
    return (
        <Text note style={{color:'#cc232a'}}> {time}</Text>
    );
};

export const TimeOnList = (props)  => {
    const time = moment(props.date || moment.now()).fromNow();
    return (
        <Text note style={{color:'#cc232a'}}> {time}</Text>
    );
};
