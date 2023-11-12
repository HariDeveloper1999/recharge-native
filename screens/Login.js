import { Text,View,StyleSheet } from "react-native";
import Home from "../components/home";

function Login() {
  return( 
    <>
  <View>
     <Home isLogin={true}/>
  </View>
     <View style={styles.customerContainer}>
     <Text style={styles.customerText}>Contact us : developer.haribabuperla@gmail.com</Text>
   </View>
   </>
  )
}

export default Login;
const styles=StyleSheet.create({

  customerContainer:{
      position:'relative',
  } ,  
  customerText:{
      position:'absolute',
      top:150,
      backgroundColor:'#3a9cde',
      color:'white',
      width:"100%" ,
      paddingVertical:20,
      textAlign:"center",
      fontSize:20  

  },
 

})