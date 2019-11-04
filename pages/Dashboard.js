import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from './../redux/actions'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Dashboard extends Component {
    render() {
        const renderRelatedItems = [];
        userData.forEach((item, key) => {
            renderRelatedItems.push(<View key={key}>
                <View style={{ flexDirection: 'row',width:'100%',justifyContent:'space-evenly' }}>
                    <Text style={{ padding: 3 }}>{item.name}</Text>
                    <Text style={{ padding: 3 }}>{item.gender}</Text>
                    <Text style={{ padding: 3 }}>{item.email}</Text>
                    <Text style={{ padding: 3 }}>{item.age}</Text>
                    <Text style={{ padding: 3 }}>{item.phoneNo}</Text>
                </View>
            </View>)
        });
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column',width:'100%' }}>
                    <View>
                        <Text>USER:{this.props.getUser}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',width:'100%',justifyContent:'space-evenly' }}>
                        <Text style={{ padding: 3, }}>name</Text>
                        <Text style={{ padding: 3,  }}>gender</Text>
                        <Text style={{ padding: 3,  }}>email</Text>
                        <Text style={{ padding: 3,  }}>age</Text>
                        <Text style={{ padding: 3,  }}>phoneNo</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {renderRelatedItems}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})

function mapStateToProps(state) {
    return {
        getUser: state.Login,
    }
}

export default connect(mapStateToProps, { loginAction })(Dashboard)

let userData = [{
    "id": 1,
    "name": "test1",
    "age": "11",
    "gender": "male",
    "email": "test1@gmail.com",
    "phoneNo": "9415346313"
},
{
    "id": 2,
    "name": "test2",
    "age": "12",
    "gender": "male",
    "email": "test2@gmail.com",
    "phoneNo": "9415346314"
},
{
    "id": 3,
    "name": "test3",
    "age": "13",
    "gender": "male",
    "email": "test3@gmail.com",
    "phoneNo": "9415346315"
},
{
    "id": 4,
    "name": "test4",
    "age": "14",
    "gender": "male",
    "email": "test4@gmail.com",
    "phoneNo": "9415346316"
},
{
    "id": 5,
    "name": "test5",
    "age": "15",
    "gender": "male",
    "email": "test5@gmail.com",
    "phoneNo": "9415346317"
},
{
    "id": 6,
    "name": "test6",
    "age": "16",
    "gender": "male",
    "email": "test6@gmail.com",
    "phoneNo": "9415346318"
}
]