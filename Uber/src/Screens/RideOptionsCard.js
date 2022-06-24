import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const RideOptionsCard = () => {

  const navigation = useNavigation();
  const data =[
    {
      id:'Uber-X-123',
      title:'UberX',
      multiplier:1,
      image:'https://links.papareact.com/3pn',
    },
    {
      id:'Uber-X-456',
      title:'Uber XL',
      multiplier:1.2,
      image:'https://links.papareact.com/5w8',
    },
    {
      id:'Uber-X-789',
      title:'Uber LUX',
      multiplier:1.75,
      image:'https://links.papareact.com/7pf',
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
            style={{padding:15,marginRight:'auto'}}
            onPress={()=>{
              navigation.navigate("NavigateCard")
            }}
          >
            <Icon name="chevron-left" type="fontawesome"/>
          </TouchableOpacity>

          <Text style={styles.text}>Select a ride</Text>

        </View>

        <FlatList 
          data={data}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:20,
    padding:15,
    marginRight:'auto',
    right:20,
  },
})
export default RideOptionsCard