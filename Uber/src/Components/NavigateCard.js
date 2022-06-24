import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_KEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../Slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import {Icon} from "react-native-elements"

export default function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Good Morning</Text>
        <View>
            <View>
                <GooglePlacesAutocomplete 
                    placeholder='Where To?'
                    
                    styles={{
                        container:{
                          flex:0,
                          padding:20,
                        },
                        textInput:{
                          fontSize:18,
                          borderRadius:0,
                        }
                      }}

                    enablePoweredByContainer={false}
                    query={{
                        key:GOOGLE_MAPS_KEY,
                        language:"en"
                      }}
                    fetchDetails={true}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    onPress={(data,details=null)=>{

                        dispatch(setDestination({
                            location:details.geometry.location,
                            description:data.description
                        }))

                        navigation.navigate('RideOptionsCard');
                    }}
                    minLength={3}
                />
            </View>
            <NavFavorites type={"destination"}/>
        </View>

        <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.ride} onPress={()=>{
                navigation.navigate("RideOptionsCard")
            }}>
                <Icon name="car" type="font-awesome" color="white" size={16}/>
                <Text style={{color:'white',marginLeft:5}}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ride,{backgroundColor:'white'}]}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                <Text style={{color:'black',marginLeft:5}}>Eats</Text>
            </TouchableOpacity>          
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    text:{
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        
    },
    ride:{

        flexDirection:'row',
        backgroundColor:"black",
        width:90,
        padding:15,
        borderRadius:50
    },
    iconsContainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'auto',
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        paddingTop:20,
        marginTop:60,
    }

})