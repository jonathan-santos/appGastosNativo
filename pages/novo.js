import React from 'react';
import { View, ScrollView, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

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
            <ScrollView style={styles.pagina}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Detalhes</Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Data</Text>
                        <TextInput style={styles.input} placeholder='01/01/2019' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Valor</Text>
                        <TextInput style={styles.input} placeholder='R$ 10,00' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Título</Text>
                        <TextInput style={styles.input} placeholder='Pãozinho na padoca' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Tipo</Text>
                        <Picker style={styles.input}>
                            <Picker.Item label="Compras" value="Compras" />
                            <Picker.Item label="Comida" value="Comida" />
                            <Picker.Item label="Transporte" value="Transporte" />
                        </Picker>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Forma de pagamento</Text>
                        <Picker style={styles.input}>
                            <Picker.Item label="Débito" value="Débito" />
                            <Picker.Item label="Crédito" value="Crédito" />
                            <Picker.Item label="Dinheiro" value="Dinheiro" />
                        </Picker>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Descrição (Opcional)</Text>
                        <TextInput style={styles.inputDescricao} placeholder='Isso fui eu comprando um pãozinho na padoca pois tinha acabado tudo em casa' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' multiline = {true} numberOfLines = {4} maxLength={150} />
                    </View>

                    <Button style={styles.salvar} title='Salvar' />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pagina: {
        height: '100%',
        padding: 10,
        backgroundColor: 'rgb(52, 152, 219)'
    },
    form: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(52, 152, 219)'
    },
    campo: {
        margin: 5,
    },
    label: {
        fontSize: 18,
        marginRight: 5
    },
    input: {
        height: 40,
        paddingLeft: 6,
        fontSize: 16
    },
    inputDescricao: {
        paddingLeft: 6,
        fontSize: 16
    },
    salvar: {

    }
})