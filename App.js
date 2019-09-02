import React from 'react'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Inicio from './pages/inicio'
import Novo from './pages/novo'
import Mes from './pages/mes'

const mainNavigator = createStackNavigator({
    Mes: { screen: Mes },
    Inicio: { screen: Inicio },
    Novo: { screen: Novo},
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'rgb(52, 152, 219)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
})

const App = createAppContainer(mainNavigator)

export default App