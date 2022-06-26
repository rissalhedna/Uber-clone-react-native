import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../Slices/navSlice";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    loc: {
      lat: 51.503223,
      lng: -0.1275,
    },
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    loc: {
      lat: 51.5033,
      lng: 0.1196,
    },
    destination: "London Eye, London, UK",
  },
];

const NavFavorites = ({ type }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{ height: 0.5, backgroundColor: "lightgrey" }} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon, loc } }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            if (type === "origin") {
              dispatch(
                setOrigin({
                  location: loc,
                  description: destination,
                })
              );
            } else if (type === "destination") {
              dispatch(
                setDestination({
                  location: loc,
                  description: destination,
                })
              );
            }

            navigation.navigate("MapScreen");
          }}
        >
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            style={styles.icon}
          />
          <View>
            <Text style={{ fontWeight: "bold" }}>{location}</Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  icon: {
    backgroundColor: "lightgrey",
    borderRadius: 50,
    padding: 10,
    marginRight: "auto",
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
});

export default NavFavorites;
