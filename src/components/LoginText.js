import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const LoginText = ({ text, navigation, route }) => {
    // const route = 'Signin'
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate(route)}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({

    text: {

        color: 'rgb(32, 137, 220)',
        paddingHorizontal: 10
    }

});

export default withNavigation(LoginText);
