import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Recharge from "./screens/Recharge";
import Plans from './screens/Plans';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"



export default function App() {
  const Stack=createNativeStackNavigator();
  const Tab=createBottomTabNavigator();

  const HandleBottomTabNavigator=()=>{
    return(
    <Tab.Navigator
    screenOptions={{
      contentStyle:{backgroundColor:"#cdde3a"},
      headerStyle:{backgroundColor:'#3a9cde'},
      headerTintColor:'#de3a81',
      tabBarActiveTintColor:'#eb4034',
      tabBarInactiveTintColor:'#34d8eb',
      tabBarStyle: {
        backgroundColor: '#3a9cde',
      },

    }}
    
    >
       <Tab.Screen  name="Mobile Recharge" component={Recharge} options={{tabBarIcon:({color,size})=><Ionicons name="phone-portrait-outline" color={color} size={30}/>}}/>
       <Tab.Screen name="DTH Recharge" component={Recharge} options={{tabBarIcon:({color,size})=><Ionicons name="laptop-outline" color={color} size={30}/>}}/>
    </Tab.Navigator>
    )
  }

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
           <Stack.Screen name="Login" component={Login} options={{title:"Login Here"}}/>
           <Stack.Screen name="Signup" component={Signup} options={{title:"Signup Here"}}/>
           <Stack.Screen name="Recharge" component={HandleBottomTabNavigator} options={{headerShown:false}}/>
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
