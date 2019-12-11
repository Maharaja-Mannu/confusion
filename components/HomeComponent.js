import React, { Component } from 'react';
import {StyleSheet,View, Text, ScrollView, ImageBackground} from 'react-native';
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseUrl'
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

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

    if (props.isLoading) {
        return (
            <Loading/>
        )
    }else if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        )
    }else {
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={{ uri: baseUrl + item.image }}
                    >
                    <Text style={{margin: 10}}>{item.description}</Text>

                </Card>
            )
        }else {
            return(<View></View>)
        }
    }
}

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
                <RenderItem
                    item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                />
                <RenderItem
                    item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    isLoading={this.props.leaders.isLoading}
                    errMess={this.props.leaders.errMess}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />

            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Home);