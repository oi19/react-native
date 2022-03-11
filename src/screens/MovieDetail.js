import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TextInput, FlatList, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import omdb from '../api/omdb';
import DataText from '../components/DataText';
import Ratings from '../components/Ratings';

const MovieDetail = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const [loader, setLoader] = useState(true)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await omdb.get(`/?&apikey=b442f019&i=${id}`)
        setResult(response.data);
        setLoader(false)
    }

    useEffect(() => { getResult(id) }, [])

    return (
        <>
            {

                loader ?
                    <View style={{ backgroundColor: 'black', flex: 1 }}>
                        <ActivityIndicator size={'large'} color={'white'} style={{ flex: 1 }} />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            style={styles.container}
                            showsVerticalScrollIndicator={false}>
                            <Text style={styles.Title}>  {result.Title}</Text>
                            <Image style={styles.Image} source={{ uri: result.Poster }} resizeMode={'contain'} />
                            <View style={styles.Text}>
                                <DataText title='plot' value={result.Plot}></DataText>
                                <DataText title='Director' value={result.Director}></DataText>
                                <DataText title='Writer' value={result.Writer}></DataText>
                                <DataText title='Stars' value={result.Actors}></DataText>
                                <DataText title='Genre' value={result.Genre}></DataText>
                                <DataText title='Released Year' value={result.Released}></DataText>
                                <DataText title='Awards' value={result.Awards}></DataText>
                                <DataText title='Country' value={result.Language}></DataText>
                                <Ratings rating={result.Ratings[0]} />
                                <Ratings rating={result.Ratings[1]} />
                                <Ratings rating={result.Ratings[2]} />
                            </View>

                        </ScrollView>
                        {/* <FlatList
                            style={{ height: 1 }}
                            keyExtractor={rating => rating.Source}
                            data={result.Ratings}
                            renderItem={({ item }) => {
                                return <Ratings rating={item} />

                            }}
                        /> */}
                    </View>


            }
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1f1f',
        flex: 1
    },
    Title: {
        marginTop: 20,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'

    },
    Image: {
        margin: 10,
        height: Dimensions.get('window').height / 2,
        // width: Dimensions.get('window').width,
        borderRadius: 10,
        borderWidth: .5,
        // borderColor: 'white',
        backgroundColor: 'red'
    },
    Text: {
        margin: 10,
        marginHorizontal: 10,
        marginBottom: 50

    },

});

export default MovieDetail;