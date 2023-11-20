import { Text,View,StyleSheet,Dimensions} from "react-native";
import Home from "../components/home";
const {height} = Dimensions.get('window')

function Login() {
  return( 
    <>
  <View>
     <Home isLogin={true}/>
  </View>
     {/* <View style={styles.customerContainer}>
     <Text style={styles.customerText}>Contact us : developer.haribabuperla@gmail.com</Text>
   </View> */}
   </>
  )
}

export default Login;
const styles=StyleSheet.create({

  customerContainer:{
    
  } ,  
  customerText:{
      
     
      backgroundColor:'#3a9cde',
      color:'white',
      width:"100%" ,
      paddingVertical:20,
      textAlign:"center",
      fontSize:18  

  },
 

})