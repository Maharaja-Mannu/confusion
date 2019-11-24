import React, { Component } from 'react';
import {StyleSheet,View, Text, ScrollView, ImageView, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
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

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('./images/img1.jpg')} style={{width: '100%', height: 200, justifyContent: 'center'}}>
                    <Text style={styles.header}>Confusion Restaurant</Text>
                </ImageBackground>
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