import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../Slices/navSlice';

const data = [
    {
        id:'1',
        title: 'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen'
    },
    {
        id:'2',
        title: 'Order food',
        image:'https://links.papareact.com/28w',
        screen:'EatScreen' // Change in future...
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
  return (
    //adding a key to the flatlist makes sure only the added items are rerendered 
    // and not the whole list
    <FlatList 
        data={data}
        horizontal
        keyExtractor = {(item)=>item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={()=> navigation.navigate(item.screen)}
                disabled={!origin}
            >
                <View style = {[styles.container, { opacity: `${origin? 1 : 0.5}`}]}>
                    <Image style={{height:120,width:120}} resizeMode={"contain"} source={{uri:item.image}}/>
                    <Text style={styles.text}>{item.title}</Text>
                    <Icon 
                        style = {styles.icon}
                        name='arrowright'
                        color='white'
                        type='antdesign'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        // alignItems:'center',
        padding:25,
        backgroundColor:'lightgrey',
        marginHorizontal:5,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10,
    },
    icon:{
        backgroundColor:'black',
        padding:10,
        borderRadius:50,
        marginTop:5,
        marginRight:'auto'
    }
})

export default NavOptions