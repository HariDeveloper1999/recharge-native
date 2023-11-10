import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Recharge from "./screens/Recharge";
import Plans from './screens/Plans';


export default function App() {
  const Stack=createNativeStackNavigator();

  return (
    <>
       <StatusBar style="auto" />
       <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          contentStyle:{backgroundColor:"#cdde3a"},
          headerStyle:{backgroundColor:'#3a9cde'},
          headerTintColor:'#de3a81'

        }}
       
       >
           {/* <Stack.Screen name="Login" component={Login} options={{title:"Login Here"}}/> */}
           <Stack.Screen name="Signup" component={Signup} options={{title:"Signup Here"}}/>
           <Stack.Screen name="Recharge" component={Recharge} options={{title:"All Recharge"}}/>
           <Stack.Screen name="Plans" component={Plans} options={{title:"Recharge Plans"}}/>
       </Stack.Navigator>
       </NavigationContainer>
     </>
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
