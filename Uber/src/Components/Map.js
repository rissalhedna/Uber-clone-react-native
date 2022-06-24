import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../Slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from "@env";

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(()=>{
        if(!origin || !destination) return;

        //Zoom and fit the markers
        mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
            edgePadding: {top:50, right:50, bottom: 50, left: 50}
        });

    },[origin,destination])

  return (
    <MapView
        ref={mapRef}
        mapType='mutedStandard'
        style = {styles.map}
        initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
  >
    {origin && destination && (
        <MapViewDirections 
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={3}
            strokeColor={'black'}
        />
    )}
        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}

                title="origin"
                description={origin.description}
                identifier="origin"
            />
        )}

        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng,
                }}

                title="destination"
                description={origin.description}
                identifier="destination"
            />
        )}
    </MapView>
  )
}

const styles = StyleSheet.create({
    map:{
        flex:1,
    }
})

export default Map