import { Platform, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {Store} from './src/App/Store'
import HomeScreen from './src/Screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/Screens/MapScreen';
import EatScreen from './src/Screens/EatScreen';
import { KeyboardAvoidingView } from 'react-native';
import RideOptionsCard from './src/Screens/RideOptionsCard';
//1) set up Redux: a) set up store - b) set up nav slice - c) import slice in store
// d) import store in app
//2) set up navigation
//3) set up google cloud platform for APIs
//4) create google maps views with GooglePlacesAutocomplete
//5) set up react-native-maps-directions for directions on the maps

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store = {Store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          //if ios use padding, if android use height

          behavior={Platform.OS==="ios"? "padding":"height"} 

          keyboardVerticalOffset={Platform.OS === "ios"? -64:0} 
          style={{flex:1}}>
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown:false}}/>
            <Stack.Screen name='EatScreen' component={EatScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
