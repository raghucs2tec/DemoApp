import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './../pages/Login';
import Dashboard from './../pages/Dashboard';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    }
})

export default createAppContainer(AppNavigator);

