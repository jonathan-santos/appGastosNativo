import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Inicio from './pages/inicio'
import Novo from './pages/novo'
import Mes from './pages/mes'

const mainNavigator = createStackNavigator({
    Inicio: { screen: Inicio },
    Mes: { screen: Mes },
    Novo: { screen: Novo}
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