import React from 'react'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Inicio from './pages/inicio'
import Novo from './pages/novo'

const mainNavigator = createStackNavigator({
    Inicio: { screen: Inicio },
    Novo: { screen: Novo}
})

const App = createAppContainer(mainNavigator)

export default App