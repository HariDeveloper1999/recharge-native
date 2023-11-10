import { Text,View,StyleSheet,Image } from "react-native"
import Input from "./Input"
import { useEffect, useState } from "react"
import Btn from "./btn"
import {useNavigation} from "@react-navigation/native"
import { Alert } from "react-native";
import {LOGDATA} from "../constants/data"


export default function  Home(props){
    const{isLogin}=props
    const navigation=useNavigation()
    const [number,setNumber]=useState();
    const [pwd,setPwd]=useState();
    const [name,setName]=useState();
    const [isHide,setHide]=useState(true);
    const[isSnackbar,setIsSnackbar]=useState(false)
    const [snackbarMsg,setSnackbarMsg]=useState("")


   

   

    const changeHandler=(event,placeholder)=>{
     switch(placeholder){
        case "Enter Mobile Number":
                    setNumber(event)
                    break;
        case "Enter password":
                    setPwd(event)
                    break;
        case "Enter Name":
                     setName(event);
                     break;
       }

        

    }
    const btnPressHandler=()=>{
        if(isLogin){
      
        const validataion =LOGDATA.find((data)=>data.mobNumber==number && data.password==pwd)
        
        if(validataion){
            // setSnackbarMsg("Login Successfully")
            // setIsSnackbar(true)
            navigation.navigate("Recharge")
           
        }
        else{
            Alert.alert("Please Enter correct details");
            // setSnackbarMsg("Please Enter correct details")
            // setIsSnackbar(true)
        }
    }
    else{
        if(name&&number&&pwd){
           const data=
            {
                name:name,
                mobNumber:number,
                password:pwd
            }
           
           LOGDATA.push(data)
        //    setSnackbarMsg("Your account is created Please do login")
        //    setIsSnackbar(true)
           navigation.navigate("Login")
        }
        else{
            Alert.alert("Please Enter correct details")
            // setSnackbarMsg("Please Enter correct details")
            // setIsSnackbar(true)
        }
    }


    }
    const linkHandler=()=>{
       isLogin? navigation.navigate("Signup"): navigation.navigate("Login")

    }

    const iconHandler=()=>{
        setHide(!isHide)
    }

    return(
       <View  style={styles.container}> 
         <View style={styles.imgContainer}>
           <Image
             source={require('../assets/logo.jpg')}
             style={styles.imageStyle}
           
           />
        </View>
     
           {(!isLogin) &&
             <Input
             type="text"
             value={name}
             changeHandler={changeHandler}
             placeholder="Enter Name"

         />
           }
          
          <Input
             type="number"
             value={number}
             changeHandler={changeHandler}
             placeholder="Enter Mobile Number"
             keyboardType="numeric"
         />

        <Input
             type="password"
             value={pwd}
             changeHandler={changeHandler}
             placeholder="Enter password"
             keyboardType="numeric"
             isSecure={isHide}
             iconHandler={iconHandler}
         />

         <Btn
           title={isLogin? "Login":"Sign up"}
           onPress={btnPressHandler}
         
         />

         <Text style={styles.textStyle}>
            {
                isLogin?
               <Text>  If You Don't have account try to <Text style={styles.link} onPress={linkHandler}>Signup</Text></Text>
                :
               <Text> If You  have account try to <Text style={styles.link} onPress={linkHandler}>Login</Text> </Text>
            }
           
        </Text>
        {/* {
            isSnackbar &&
             <SnackbarComponent  
             visible={isSnackbar}
             textMessage={snackbarMsg}
             backgroundColor={snackbarMsg.endsWith("details")?"red":"green"}
             position='top'
           
             
             />
        } */}
         

       </View>
    )

}

const styles=StyleSheet.create({
    container:{
        marginVertical:20,
        padding:20
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:16,
        marginTop:10
    },
    link:{
        color:"blue",
        textDecorationLine:"underline"
    },
    imageStyle:{
        height:200,
        width:200,
        borderRadius:100,
        marginBottom:20,
        borderWidth:2,
        borderColor:'black'

    }
})
