import React from 'react';
import { View, Text } from 'react-native';

export default class Novo extends React.Component {
    static navigationOptions = {
        title: 'Novo'
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <Text>Novo</Text>
            </View>
        )
    }
}