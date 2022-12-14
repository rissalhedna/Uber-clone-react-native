import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../Slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

//the current rate it is charged at, changes based on the availability
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ padding: 15, marginRight: "auto" }}
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        <Text style={styles.text}>
          Select a ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              },
              item.id === selected?.id && { backgroundColor: "lightgrey" },
            ]}
          >
            <Image
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
              source={{ uri: image }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} travel time...</Text>
            </View>
            <Text style={{ fontSize: 18 }}>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          borderTopWidth: 0.3,
          paddingTop: 5,
          borderColor: "lightgrey",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              backgroundColor: "black",
              paddingVertical: 15,
              width: "90%",
              fontSize: 16,
            }}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    textAlign: "center",
    fontSize: 20,
    padding: 15,
    marginRight: "auto",
    right: 20,
  },
});
export default RideOptionsCard;
