import { useState, useEffect } from 'react';
import axios from 'axios';

import omdb from '../api/omdb';


export default () => {
    const [results, setResutls] = useState([])
    const [container, setContainer] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (name = '', pageNum = 1) => {
        try {

            // name === '' ? setErrorMessage("Something Went Wrong") : null
            const response = await omdb.get(`/?&apikey=b442f019&s=${name}&page=${pageNum}`)
            // const response = await axios.get(`http://www.omdbapi.com/?apikey=b442f019&s=${name}`)
            // const response = await axios.get('https://www.omdbapi.com/?&apikey=b442f019&s=inter`)

            setResutls(response.data.Search)
            // setContainer([...container, ...response.data.Search])
            console.log(results)
            // console.log(container)

            // setSeenMovies([...seenMovies, ...results])

            // Array.prototype.push.apply(seenMovies, results);
            // console.log(results)
            // console.log(seenMovies)
            console.log('THIS IS ITTTTTTTTTTTTTTTTTTTTT\n\n\n\n')
        }

        catch (err) {
            setErrorMessage(err)
        }
    }

    // use searchApi when initialzing and whenever the name value changes
    useEffect(() => { searchApi('Cat') }, [])
    // console.log(results)

    return [searchApi, results, container, errorMessage];
}