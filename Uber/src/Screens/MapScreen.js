import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Map from "../Components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "./RideOptionsCard";
//DONT FORGET THIS
//yarn add react-native-maps
const Stack = new createNativeStackNavigator();
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "50%" }}>
        <Map />
      </View>
      <View style={{ height: "50%" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
export default MapScreen;
