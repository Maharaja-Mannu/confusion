import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import Dishdetail from './DishdetailComponent'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import About from './AboutComponent'
import {Icon} from 'react-native-elements'


const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512dab',
                paddingHorizontal: 16
            },
            headerLeft: <Icon name="menu" size={30} color='white' 
                onPress={() => navigation.toggleDrawer()}
                />
        }) },
    
    Dishdetail: { screen: Dishdetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512dab',
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
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512dab',
            paddingHorizontal: 16
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name="menu" size={30} color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
})

const AboutNavigator = createStackNavigator({
    About: { screen: About }
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512dab',
            paddingHorizontal: 16
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name="menu" size={30} color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
})

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512dab',
            paddingHorizontal: 16
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name="menu" size={30} color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
})

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={StyleSheet.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Restorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='list'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                />
            )
        }
    }

},{
    drawerBackgroundColor: 'rgba(255,255,255,0.9)',
    contentComponent: CustomDrawerContentComponent
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512da8',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',

    },
    drawerImage: {
        margin: 16,
        width: 50,
        height: 50
    }
})

export default Main
//paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight