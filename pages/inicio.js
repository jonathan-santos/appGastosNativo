import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default class Inicio extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Inicio',
        headerRight: (
            <Button
              title="+"
              fontSize={25}
              marginRight={10}
              fontWeight='bold'
              backgroundColor='magenta'
              onPress={() => navigation.navigate('Novo')}
            />
          ),
    })

    constructor(props) {
        super(props)
        this.state = {
            balancoTotal: 0,
            investimentoTotal: 0,
            meses: []
        };
    }

    componentDidMount() {
        this.setState({
            balancoTotal: 1000,
            investimentoTotal: 1000,
            meses: [
                { nome: "Janeiro", entrada: 950, saida: 800 },
                { nome: "Fevereiro", entrada: 950, saida: 800 },
                { nome: "Março", entrada: 950, saida: 800 },
                { nome: "Abril", entrada: 950, saida: 800 },
                { nome: "Maio", entrada: 950, saida: 800 },
                { nome: "Junho", entrada: 950, saida: 800 },
                { nome: "Julho", entrada: 950, saida: 800 },
                { nome: "Agosto", entrada: 950, saida: 800 },
            ]
        })    
        this.forceUpdate()
    }

    render() {
        return (
            <ScrollView style={styles.pagina}>
                <View style={styles.resumo}>
                    <Text style={styles.resumoNumero}>{this.state.balancoTotal}</Text>
                    <Text style={styles.resumoTexto}>de balanço total</Text>
                    <Text style={styles.resumoNumero}>{this.state.investimentoTotal}</Text>
                    <Text style={styles.resumoTexto}>de investimento total</Text>
                </View>

                {this.state.meses &&
                    <View style={styles.meses}>
                        {this.state.meses.map(mes => (
                            <View style={styles.mes} key={mes.nome}>
                                <Text style={styles.mesTitulo}>{mes.nome}</Text>
                                <Text style={styles.mesEntrada}>+ {mes.entrada}</Text>
                                <Text style={styles.mesSaida}>- {mes.saida}</Text>
                                <Button title="+ Detalhes" color='magenta' style={styles.mesDetalhes} />
                            </View>
                        ))}
                    </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pagina: {
    },
    resumo: {
        height: 300,
        backgroundColor: 'rgb(52, 152, 219)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resumoNumero: {
        fontSize: 40,
        color: '#ffffff'
    },
    resumoTexto: {
        fontSize: 25,
        color: '#ffffff',
        marginBottom: 20
    },
    meses: {
        backgroundColor: 'magenta',
        display: 'flex',
        padding: 5
    },
    mes: {
        height: 185,
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
    },
    mesTitulo: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'magenta',
    },
    mesEntrada: {
        marginBottom: 10,   
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    mesSaida: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
})