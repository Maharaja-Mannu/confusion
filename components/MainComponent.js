import React, { Component } from 'react'
import Menu from './MenuComponent'
import { DISHES } from  '../shared/dishes'
import Dishdetail from './DishdetailComponent'
import { View } from 'react-native'
import Constants from 'expo-constants'
import { createStackNavigator } from 'react-navigation'
import { Platform } from '@unimodules/core'

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512da8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    }
})

class Main extends Component {

    render() {
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
                <MenuNavigator />
            </View>
            
        )
    }
}
export default Main