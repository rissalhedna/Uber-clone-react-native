import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import Map from "../Components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "./RideOptionsCard";
import { useNavigation } from "@react-navigation/native";
//DONT FORGET THIS
//yarn add react-native-maps
const Stack = new createNativeStackNavigator();

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 1,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 50,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: { height: 2 },
        }}
      >
        <Icon name="menu" />
      </TouchableOpacity>
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
