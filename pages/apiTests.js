import React from 'react'
import { View, Text } from 'react-native'

import axios from 'axios'
import api, { apiConfig } from '../api'

export default class ApiTests extends React.Component {
    static navigationOptions = {
        title: 'Testes API'
    }

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const res = await api.get('values/2019', apiConfig)
    }

    render() {
        return (
            <View>
                <Text>API Tests</Text>
            </View>
        )
    }
}