import React from 'react'
import { View, Text } from 'react-native'

const modeloGastos = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRGrl2y-FTnTqRKsdwWU-ijPal1fZS8DOEChu2SZZ2xeu6ynS4sLyeORoHKRUS_CsQZHJRogPSKneo3/pubhtml'
const idModeloGastos = '1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc'
const apiKey = 'AIzaSyAeYZR5gaJXZTFT3MvIlDEAE-jIEZoeqvA'
//GET GET https://sheets.googleapis.com/v4/spreadsheets/1MV3AOF5m4YdSi7EbfH6Jc3szfhvyapu5uRSYm6hNbRc/values/2019?key=AIzaSyAeYZR5gaJXZTFT3MvIlDEAE-jIEZoeqvA

export default class ApiTests extends React.Component {
    static navigationOptions = {
        title: 'Testes API'
    }

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${idModeloGastos}/values/2019?key=${apiKey}`)
        const data = await res.json()
        alert(`data: ${JSON.stringify(data)}`)
    }

    render() {
        return (
            <View>
                <Text>API Tests</Text>
            </View>
        )
    }
}