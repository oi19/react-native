import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const { state: { currentLocation }, state: { locations } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }

    return <>

        <MapView
            style={styles.map}
            showsBuildings={true}
            userInterfaceStyle={'light'}
            // mapType='hybrid'
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}

        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(158,158,255,1)'
                fillColor="rgba(158,158,255,0.3)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>


    </>
};

const styles = StyleSheet.create({
    map: {
        // height: Dimensions.get('window').height
        height: 300,
        // margin: 10
    }
});

export default Map;