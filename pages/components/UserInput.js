import React from 'react';
import { TextInput } from 'react-native';
function UserInput(props) {
    return (
        <TextInput 
        placeholder={props.name}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        />
    )
}
export default UserInput;