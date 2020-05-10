import 'react-native-gesture-handler';
import React, {PureComponent} from "react";
import {connect, Provider} from "react-redux";
import {store} from "./src/store/utilities/storeConfiguration";
import WrapperClass from "./src/WrapperClass";

export default class App extends PureComponent{
  render() {
    return (
        <Provider store={store}>
          <WrapperClass/>
        </Provider>
    );
  }
}
