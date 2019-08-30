import React from 'react';
import { View, ScrollView, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class Novo extends React.Component {
    static navigationOptions = {
        title: 'Novo'
    }

    constructor(props) {
        super(props)

        const hoje = new Date()
        const hojeString = `${hoje.getDate()}-${hoje.getMonth()+1}-${hoje.getFullYear()}`;

        this.state = {
            data: hojeString
        }
    }

    render() {
        return (
            <ScrollView style={styles.pagina}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Detalhes</Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Título</Text>
                        <TextInput style={styles.input} placeholder='Pãozinho na padoca' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Data</Text>
                        <DatePicker
                            style={styles.inputData}
                            mode='date'
                            date={this.state.data}
                            format='DD-MM-YYYY'
                            showIcon={false}
                            customStyles={{
                                dateInput: styles.inputDataView,
                                dateText: styles.inputDataText
                            }}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Valor</Text>
                        <TextInput style={styles.input} placeholder='R$ 10,00' selectionColor='rgb(52, 152, 219)' underlineColorAndroid='rgb(52, 152, 219)' />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Tipo</Text>
                        <Picker style={styles.input}>
                            <Picker.Item label="Comida" value="Comida" />
                            <Picker.Item label="Transporte" value="Transporte" />
                            <Picker.Item label="Compras" value="Compras" />
                            <Picker.Item label="Lazer" value="Lazer" />
                            <Picker.Item label="Saúde" value="Saúde" />
                            <Picker.Item label="Contas" value="Contas" />
                            <Picker.Item label="Transferências" value="Transferências" />
                            <Picker.Item label="Investimentos" value="Investimentos" />
                        </Picker>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Forma de pagamento</Text>
                        <Picker style={styles.input}>
                            <Picker.Item label="Dinheiro" value="Dinheiro" />
                            <Picker.Item label="Débito" value="Débito" />
                            <Picker.Item label="Boleto" value="Boleto" />
                            <Picker.Item label="Transferência" value="Transferência" />
                            <Picker.Item label="Crédito" value="Crédito" />
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
    inputData: {
        width: '100%'
    },
    inputDataView: {
        height: 25,
        justifyContent: 'flex-end',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'rgb(52, 152, 219)'
    },
    inputDataText: {
        paddingLeft: 6,
        alignSelf: 'flex-start',
        fontSize: 16
    },
    inputDescricao: {
        paddingLeft: 6,
        fontSize: 16
    },
    salvar: {

    }
})