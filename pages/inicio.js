import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { white } from 'ansi-colors';

export default function Inicio() {
    state = {
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
    };

    return (
        <View style={styles.pagina}>
            <View style={styles.numerosGerais}>
                <Text style={styles.numerosGerais.numero}>{state.balancoTotal}</Text>
                <Text style={styles.numerosGerais.titulo}>de balanço total</Text>
                <Text style={styles.numerosGerais.numero}>{state.investimentoTotal}</Text>
                <Text style={styles.numerosGerais.titulo}>de investimento total</Text>
            </View>
            <View style={styles.meses}>
                {state.meses.map(mes => (
                    <View style={styles.meses.mes} key={mes.nome}>
                        <Text style={styles.meses.mes.titulo}>{mes.nome}</Text>
                        <Text style={styles.meses.mes.entrada}>+ {mes.entrada}</Text>
                        <Text style={styles.meses.mes.saida}>- {mes.saida}</Text>
                        <Button title="+ Detalhes" style={styles.meses.mes.detalhes} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pagina: {
        numerosGerais: {
            backgroundColor: rgb(52, 152, 219),
            color: white,
            numero: {
                fontSize: '3rem',
                marginBottom: '0.5rem'
            },
            titulo: {
                fontSize: '1.25rem'
            }
        },
        meses: {
            backgroundColor: 'magenta',
            padding: '0.25rem 0',
            mes: {
                height: '15rem',
                width: '17.5rem',
                margin: '0.5rem',
                backgroundColor: 'white',
                borderRadius: '0.2rem',
                titulo: {
                    color: 'magenta',
                    fontWeight: 'bold'
                },
                entrada: {
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                },
                saida: {
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                },
                detalhes: {
                    borderRadius: '2rem',
                    borderColor: 'magenta',
                    color: 'magenta'
                }
            }
        }
    }
})