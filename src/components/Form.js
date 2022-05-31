import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';


const Form = ({ errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Input

                // label='Email'
                placeholder='Email'
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                leftIcon={<MaterialIcons name="email" size={24} color='black' />}

            />

            <Input
                secureTextEntry
                placeholder='Password'
                // label='Password'
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCapitalize='none'
                autoCorrect={false}
                style={[styles.input, styles.shadowProp]}
                leftIcon={<MaterialIcons name="lock" size={24} color="black" />}

            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Button buttonStyle={[styles.button, styles.dropShadow]} style={styles.dropShadow} title={buttonText} onPress={async () => {
                await onSubmit({ email, password })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 15,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'black',
        width: '100%',
        alignSelf: 'center',
        fontSize: 30,
        padding: 8
    },
    input: {
        paddingHorizontal: 5
    },
    errorMessage: {
        fontSize: 20,
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    }

});

export default Form;
