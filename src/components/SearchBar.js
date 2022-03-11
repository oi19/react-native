import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                placeholderTextColor={'white'}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        backgroundColor: '#1f1f1f',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 20,
        borderColor: 'white',
        borderWidth: 1
    },
    inputStyle: {
        // borderColor:'white',
        flex: 1,
        fontSize: 18,
        color: 'white',
        // placeholderTextColor: 'white'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'white'
    }
});

export default SearchBar;
