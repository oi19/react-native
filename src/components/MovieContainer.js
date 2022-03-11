// import axios from 'axios';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, Dimensions } from 'react-native'
import omdb from '../api/omdb';


const MovieContainer = ({ movie }) => {

    return <View style={styles.Container}>
        <Image style={styles.Image} source={{ uri: movie.Poster }} />
        <View style={styles.Text}>
            {/* <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>{movie.Title}</Text> */}
            <TextInput multiline={true} editable={false} style={styles.Title}>{movie.Title}</TextInput>
            <Text style={{ color: 'white' }}>Type: {movie.Type}</Text>
            <Text style={{ color: 'white' }}>Year: {movie.Year}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'flex-end'
        marginBottom: 10,

    },
    Image: {
        resizeMode: 'stretch',
        width: 150,
        height: 150,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'


    },

    Text: {
        justifyContent: 'space-around',
        flexWrap: 'wrap'
        // paddingRight: 20,
        // width: Dimensions.get('window').width
        // alignItems: 'center'
    }
    , Title: {
        fontWeight: 'bold',
        textAlign: 'left',
        lineHeight: 20,
        width: 230,
        color: 'white'
    }
})

export default MovieContainer;