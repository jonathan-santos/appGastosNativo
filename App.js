import React from 'react'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Inicio from './pages/inicio'
import Novo from './pages/novo'
import Mes from './pages/mes'
import ApiTests from './pages/apiTests'

const mainNavigator = createStackNavigator({
    Inicio: { screen: Inicio },
    Mes: { screen: Mes },
    Novo: { screen: Novo},
    ApiTests: { screen: ApiTests },
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