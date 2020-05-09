import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
      <MaterialCommunityIcons
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}
