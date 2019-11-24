import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent'
import { View } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512dab'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    }
})

// drawer based navigation
const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512dab'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
},{
    drawerBackgroundColor: '#d1c4e9'
})

class Main extends Component {

    render() {
        return(
            <View style={{flex: 1 }}>
                <MainNavigator />
            </View>
            
        )
    }
}
export default Main
//paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight