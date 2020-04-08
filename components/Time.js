import React from 'react';
import {Text} from 'native-base';
import moment from 'moment';

export const TimeOnHeader = (props)  => {
    const time = moment(props.date || moment.now()).fromNow();
    return (
        <Text style={{textTransform: 'capitalize', textAlign: 'right', fontFamily: 'Roboto', color:'#fff', fontSize: 13, paddingHorizontal: 10}}> {time}</Text>
    );
};

export const TimeOnList = (props)  => {
    const time = moment(props.date || moment.now()).fromNow();
    return (
        <Text style={[{textTransform: 'capitalize', fontSize: 11, fontFamily: 'Roboto', color:'#cc232a'}, props.extraStyle]}> {time}</Text>
    );
};
