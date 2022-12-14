import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import NavOptions from '../Components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../Slices/navSlice';
import NavFavorites from '../Components/NavFavorites';

const HomeScreen = () => {
  //dispatch variable for react redux
  const dispatch = useDispatch();

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Image style={styles.logo} source={{ 
            uri: "https://links.papareact.com/gzs",
        }}/>

        <GooglePlacesAutocomplete
          placeholder='Where from?'
          //Show the input section on the screen

          styles={{
            container:{
              flex:0,
            },
            textInput:{
              fontSize:18
            }
          }}

          //The API we are going to use
          nearbyPlacesAPI='GooglePlacesSearch'

          //define the query
          query ={{
            key: GOOGLE_MAPS_KEY,
            language: 'en'
          }}
          //when you stop typing for 400ms it will search
          debounce={400}

          //delete the "powered by google" tag
          enablePoweredByContainer={false}

          minLength={3}

          //we get the details to display using redux
          fetchDetails={true}

          onPress={(data,details=null)=>{
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}

        />
        <NavOptions/>
        <NavFavorites type={"origin"}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:0
    },
    text:{
        color: 'red',
    },
    logo:{
        width:100,
        height:100,
        resizeMode:'contain'
    }
})
export default HomeScreen
