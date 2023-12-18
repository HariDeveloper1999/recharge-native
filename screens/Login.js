import { Text,View,StyleSheet,Dimensions,KeyboardAvoidingView} from "react-native";
import Home from "../components/home";

const devHeight=Dimensions.get('window').height;
function Login() {
 

  console.log("devHeight",devHeight)
  return( 
    <KeyboardAvoidingView>
  <View>
     <Home isLogin={true}/>
  </View>

  <View style={styles.customerContainer}>
     <Text style={styles.customerText}>Contact us : developer.haribabuperla@gmail.com</Text>
   </View>



  
   </KeyboardAvoidingView>
  )
}

export default Login;
const styles=StyleSheet.create({

  customerContainer:{

    position:"absolute",
   bottom:"-18%",
     width:'100%'
    
  } ,  

  customerText:{
      
     
      backgroundColor:'#3a9cde',
      color:'white',
      width:"100%" ,
      paddingVertical:20,
      textAlign:"center",
      fontSize:18,
      borderWidth:2,
      borderColor:'orange' ,
      borderStyle:'dotted'

  },
 

})