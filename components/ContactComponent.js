import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { Card } from 'react-native-elements'

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <View>
                <Card title="Our Address">
                    <Text style={styles.list}>121, Clear Water Bay Road</Text>
                    <Text style={styles.list}>Clear Water Bay, Kowloon HONG KONG</Text>
                    <Text style={styles.list}>Tel: +852 1234 5678</Text>
                    <Text style={styles.list}>Fax: +852 8765 4321</Text>
                    <Text style={styles.list}>Email:confusion@food.net</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 5,

    }
})

export default Contact