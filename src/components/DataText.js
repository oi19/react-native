import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const DataText = ({ title, value }) => {

    return (
        title == 'plot'
            ? <View>
                <TextInput style={styles.plot} editable={false} multiline={true}>{value} </TextInput>
            </View>
            : <View style={styles.TextContainer}>
                <Text style={styles.miniText} numberOfLines={2}><Text style={styles.Titles}>{title}   </Text>{value}</Text >
            </View>

    )


}


const styles = StyleSheet.create({
    Titles: {
        color: 'white',
        fontWeight: 'bold',
        borderBottomWidth: .5,
        borderBottomColor: '#454545',
        marginVertical: 10,
        paddingBottom: 15,

        // marginRight:5
    },
    plot: {
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#454545',
        lineHeight: 20
        // borderWidth: 1

    },
    TextContainer: {
        borderBottomColor: '#454545',
        borderBottomWidth: 1,

    },
    miniText: {
        // alignItems: 'center'

        color: '#5799ef',
        borderBottomWidth: .5,
        borderBottomColor: '#454545',
        marginVertical: 10,
        flexDirection: 'column',
        paddingVertical: 5,
        fontWeight: 'bold',

    }
})


export default DataText;