import React from 'react'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Inicio from './pages/inicio'
import Novo from './pages/novo'

const mainNavigator = createStackNavigator({
    Novo: { screen: Novo},
    Inicio: { screen: Inicio },
})

const App = createAppContainer(mainNavigator)

export default App