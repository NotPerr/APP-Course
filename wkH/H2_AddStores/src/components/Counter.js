import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {observer} from 'mobx-react';

@observer
class Counter extends Component {
  render() {
    const { container, btnArea, btnStyle, counter } = styles;
    let { counterStore } = this.props;
    return (
        <View style={container}>
            <View style={btnArea}>
                <Button
                    title='+'
                    textStyle={{fontSize: 60}}
                    buttonStyle={btnStyle}
                    onPress={() => counterStore.count+= 1}
                />
                <Button
                    title='-'
                    textStyle={{fontSize: 60}}
                    buttonStyle={btnStyle}
                    onPress={() => counterStore.count-= 1}
                />
            </View>
            <Text style={counter}>{counterStore.count}</Text>
        </View>
    );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  btnArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 100,
  },
  counter: {
    marginTop: 60,
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold'
  }
});

export default Counter;
