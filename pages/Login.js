import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import UserInput from './components/UserInput';
import { connect } from 'react-redux';
import { loginAction } from './../redux/actions'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            email_status: true,
            password_status: true,
            status: true
        }
    }

    handleEmailChange = (value) => {
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,72}))$/;
        this.setState({
            email: value,
            email_status: re.test(value.toString())
        })
        console.log(value)
    };


    handlePasswordChange = (newText) => {
        console.log(newText)
        if (newText.length >= 1) {
            this.setState({
                password: newText,
                password_status: true
            })
        }
        else {
            this.setState({
                password: newText,
                password_status: false
            })
        }
    }

    _handleLogin = () => {
        if (!this.state.email_status || !this.state.password_status) {
            alert("Input fields error");
        }
        else {
            if (this.state.email.toLowerCase() === "hruday@gmail.com" && this.state.password == "hruday123") {
                this.props.loginAction(this.state.email.toLowerCase())
                this.props.navigation.navigate("Dashboard")
            }
            else {
                alert("Incorrect username or password")
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 30 }}>
                    <View style={{ width: '80%', height: 100, padding: 8, flexDirection: 'column' }}>
                        <Text>
                            UserName:
                        </Text>
                        <UserInput name="Enter username"
                            secureTextEntry={false}
                            onChangeText={this.handleEmailChange} />
                    </View>
                    <View style={{ width: '80%', height: 100, padding: 8, flexDirection: 'column' }}>
                        <Text>
                            Password:
                        </Text>
                        <UserInput name="Enter Password"
                            secureTextEntry={true}
                            onChangeText={this.handlePasswordChange} />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: 40, backgroundColor: '#eeeeee', padding: 8, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this._handleLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>

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

export default connect(mapStateToProps, { loginAction })(Login)