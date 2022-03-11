import axios from 'axios';
// ?apikey=[b442f019]&
export default axios.create({
    baseURL: "http://www.omdbapi.com",
    // headers: {
    //     Authorization:
    //         "Bearer "
    // },
});
