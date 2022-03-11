import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Ratings = ({ rating }) => {


    if (!rating) return null
    console.log('new line\n')

    var color = 'green'
    var percentage = 0
    if (rating.Value[rating.Value.length - 1] == '%') {
        percentage = parseInt(rating.Value.split('%'))
        console.log(percentage)


    }
    else {

        var i = rating.Value.split('/')
        console.log(i)
        percentage = (i[0] / i[1]) * 100
        console.log(percentage)
    }

    if (percentage < 80 && percentage > 65) color = 'yellow'
    else if (percentage < 65) color = 'red'




    return <View style={styles.rateContainer}>
        <Text style={styles.Source}>{rating.Source}({rating.Value})</Text>
        <View style={{ width: `${percentage}%`, backgroundColor: `${color}`, height: 10, borderRadius: 5 }} />
    </View>

}


const styles = StyleSheet.create({
    rateContainer: {
        borderBottomColor: '#454545',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginVertical: 10,
        justifyContent: 'space-between',
        height: 50
    },
    Source: {
        fontWeight: 'bold',
        // color: '#454545'
        color: 'white'

    },

});


export default Ratings;