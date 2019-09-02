import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default class Mes extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Mês',
        headerRight: (
            <View style={{ paddingRight: 10 }}>
                <Button
                    title=" + "
                    color='magenta'
                    onPress={() => navigation.navigate('Novo')}
                />
            </View>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            mes: {
                titulo: 'Setembro',
                entrada: 1000,
                saida: 500
            },
            tiposGasto: [],
            ganhos: [],
            gastos: []
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            tiposGasto: [
                { titulo: 'Comida', valor: 100 },
                { titulo: 'Transporte', valor: 100 },
                { titulo: 'Compras', valor: 100 },
                { titulo: 'Lazer', valor: 100 },
                { titulo: 'Saúde', valor: 100 },
                { titulo: 'Contas', valor: 100 },
                { titulo: 'Transferências', valor: 100 },
                { titulo: 'Investimentos', valor: 100 }
            ],
            formasPagamento: [
                { titulo: 'Dinheiro', valor: 100 },
                { titulo: 'Débito', valor: 100 },
                { titulo: 'Boleto', valor: 100 },
                { titulo: 'Transferência', valor: 100 },
                { titulo: 'Crédito', valor: 100 }
            ],
            ganhos: [
                { titulo: 'Salário', valor: 100 },
                { titulo: 'Vale Refeição', valor: 100 },
                { titulo: 'Vale Transporte', valor: 100 },
                { titulo: 'Ganhos por Fora', valor: 100 },
                { titulo: 'Rend. Poupança', valor: 100 }
            ],
            gastos: [
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
                { dia: 1, formaPagamento: 'Dinheiro', tipoGasto: 'Comida', valor: 16.90, titulo: 'PF na padoca', comentario: 'Tava com fome' },
            ]
        })
    }

    render() {
        return (
            <ScrollView style={styles.pagina}>
                <View style={styles.area}>
                    <Text style={styles.mesTitulo}>{this.state.mes.titulo}</Text>

                    <View style={styles.numerosResumo}>
                        <Text style={styles.mesEntrada}>+ {this.state.mes.entrada}</Text>
                        <Text style={styles.mesSaida}>- {this.state.mes.saida}</Text>
                    </View>
                </View>

                {this.state.tiposGasto && 
                    <View style={styles.area}>
                        <Text style={styles.titulo}>Tipos de gastos</Text>

                        {this.state.tiposGasto.map(tipoGasto => (
                            <View style={styles.tipoGasto} key={tipoGasto.titulo}>
                                <Text style={styles.tipoGastoTitulo}>{tipoGasto.titulo}: </Text>
                                <Text style={styles.tipoGastoTotal}>{tipoGasto.valor}</Text>
                            </View>
                        ))}
                    </View>
                }

                {this.state.formasPagamento &&
                    <View style={styles.area}>
                        <Text style={styles.titulo}>Formas de pagamento</Text>

                        {this.state.formasPagamento.map(formaPagamento => (
                            <View style={styles.formaPagamento} key={formaPagamento.titulo}>
                                <Text style={styles.formaPagamentoTitulo}>{formaPagamento.titulo}: </Text>
                                <Text style={styles.formaPagamentoTotal}>{formaPagamento.valor}</Text>
                            </View>
                        ))}
                    </View>
                }

                <View style={styles.area}>
                    <Text style={styles.titulo}>Ganhos</Text>
                    
                    {this.state.ganhos.map(ganho => (
                        <View style={styles.ganho} key={ganho.titulo}>
                            <Text style={styles.ganhoTitulo}>{ganho.titulo}: </Text>
                            <Text style={styles.ganhoTotal}>{ganho.valor}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.area}>
                    <Text style={styles.titulo}>Gastos</Text>

                    {this.state.gastos.map(gasto => (
                        <View style={styles.gasto} key={gasto.titulo}>
                            <Text style={styles.gastoTitulo}>{gasto.titulo}: </Text>
                            <Text style={styles.gastoTotal}>{gasto.valor}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pagina: {
        height: '100%',
        padding: 10,
        backgroundColor: '#ddd'
    },
    area: {
        textAlign: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    titulo: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'rgb(52, 152, 219)',
        fontWeight: 'bold',
        fontSize: 20
    },
    descricao: {
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 16,
        color: '#777'
    },
    mesTitulo: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'magenta',
    },
    numerosResumo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    mesEntrada: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    mesSaida: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    tipoGasto: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tipoGastoTitulo: {
        color: 'magenta',
        fontSize: 16
    },
    tipoGastoTotal: {
        fontSize: 16
    },
    formaPagamento: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    formaPagamentoTitulo: {
        color: 'magenta',
        fontSize: 16
    },
    formaPagamentoTotal: {
        fontSize: 16
    },
    ganho: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ganhoTitulo: {
        color: 'magenta',
        fontSize: 16
    },
    ganhoTotal: {
        fontSize: 16
    },
    gasto: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gastoTitulo: {
        color: 'magenta',
        fontSize: 16
    },
    gastoTotal: {
        fontSize: 16
    },
})