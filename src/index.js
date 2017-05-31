import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class FoundYou extends Component {
    render() {
        return (
            <Text> Some Text! </Text>
        );
    }
}

AppRegistry.registerComponent('FoundYou', () => FoundYou);
