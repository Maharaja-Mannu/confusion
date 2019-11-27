import React, { Component } from 'react';
import {StyleSheet,View, Text, ScrollView, ImageBackground} from 'react-native';
import { Card } from 'react-native-elements'
import { DISHES } from '../shared/dishes'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    header: { 
        color: '#fff',
        fontSize: 30,
        textAlign: "center"
    },
    title: {
        fontSize: 20,
        paddingVertical: 5,
        fontWeight: 'bold',
        marginTop: 20,
    }
})

function RenderItem(props) {
    const item = props.item;
    if (item != null) {
        return(
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/uthappizza.png')}
                >
                <Text style={{margin: 10}}>{item.description}</Text>

            </Card>
        )
    }else {
        return(<View></View>)
    } 
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,

        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('./images/img1.jpg')} style={{width: '100%', height: 200, justifyContent: 'center'}}>
                    <Text style={styles.header}>Confusion Restaurant</Text>
                </ImageBackground>
                <RenderItem
                    item={this.state.dishes.filter((dish) => dish.featured)[0]}
                />
                <RenderItem
                    item={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter((promo) => promo.featured)[0]}
                />

                <View style={styles.container}>
                    
                    <Text style={styles.title}>Step One</Text>
                    <Text>
                        Edit App.js to change this screen and turn it
                        into your app.
                    </Text>
                    <Text style={styles.title}>See Your Changes</Text>
                    <Text>
                        Press Cmd + R inside the simulator to reload
                        your app’s code.
                    </Text>
                    <Text style={styles.title}>Debug</Text>
                    <Text>
                        Press Cmd + M or Shake your device to open the
                        React Native Debug Menu.
                    </Text>
                    <Text style={styles.title}>Learn</Text>
                    <Text>
                        Read the docs to discover what to do next:
                    </Text>
                    
                </View>
            </ScrollView>
        )
    }
}

export default Home;