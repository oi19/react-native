import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ListFooterComponent, RefreshControl } from 'react-native';
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';
import omdb from '../api/omdb';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const SearchScreen = ({ navigation }) => {
    const [loader, setLoader] = useState(false)
    const [term, setTerm] = useState('')
    const [results, setResutls] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [pageNum, setPageNum] = useState(1)

    // var pageNum = 1


    useEffect(() => {

    }, [])

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Detail', { id: item.imdbID })
                }
            >
                <MovieContainer
                    movie={item} />
            </TouchableOpacity>
        )

    }



    const searchApi = async (name = '', pageNum) => {
        try {
            const response = await omdb.get(`/?&apikey=b442f019&s=${name}&page=${pageNum}`)
            pageNum == 1
                ? setResutls([...response.data.Search])
                : setResutls([...results, ...response.data.Search])
            setTotalResults(parseInt(response.data.totalResults))
            // console.log(totalResults)

            // console.log(results)

        }
        catch (err) {
            console.log(err, 'bassam')

        }
    }




    const wait = async (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onLoading = async () => {
        // console.log(results)
        try {
            setLoader(true);
            wait(2000).then(() => {
                setLoader(false)
            })
            await searchApi(term, 1)
            // setPageNum(1)
            console.log(results)
        }
        catch (err) {
            console.log(err, 'omar')
        }
    }



    const loadMore = () => {
        console.log(totalResults)
        console.log(totalResults - results.length)

        if (totalResults - results.length > 0) { searchApi(term, pageNum + 1) }
        else {
            console.log('No More Movies')
        }

        console.log('Bottom')


        // increase pageNum by 
        setPageNum(pageNum + 1)
    }







    return (
        <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
            <Text>{term}</Text>
            <SearchBar
                term={term}
                onTermChange={async (term) => {
                    console.log('term', term)
                    setTerm(term)
                    setResutls([])
                    searchApi(term, 1)
                    // console.log(first)
                }}
            />

            {
                results.length == 0 && (<View style={{ flex: 1, justifyContent: 'center' }} >
                    {/* <ActivityIndicator size={'large'} color={'white'} style={{
                        flex: .5, backgroundColor: 'green'
                    }} /> */}
                    <Text style={{ alignSelf: "center", fontSize: 18, color: 'white' }}>Search For Series, Movie,... above <AntDesign name="arrowup" size={24} color="white" /></Text>
                </View>)
            }


            {results && (<FlatList
                style={{ flex: 1, marginBottom: 20 }}
                keyExtractor={item => item.imdbID}
                data={results}
                renderItem={({ item }) => renderItem(item)}
                refreshControl={
                    <RefreshControl
                        refreshing={loader}
                        onRefresh={onLoading}
                        // colors={['white', 'red', 'yellow']}
                        // style={{ backgroundColor: 'transparent' }}
                        tintColor={'white'}
                    />
                }
                onEndReached={loadMore}

                onEndReachedThreshold={.1}

            />)
            }


        </View>
    )
};

const styles = StyleSheet.create({

});


export default SearchScreen;