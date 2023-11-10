import { Text,View } from "react-native";
import Home from "../components/home";

function Login() {
  return( <View>
     <Home isLogin={true}/>
  </View>
  )
}

export default Login;