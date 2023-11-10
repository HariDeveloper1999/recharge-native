import { Text,StyleSheet,View } from "react-native"
import DropDown from "../components/dropDown"
import { useState } from "react"
import Input from "../components/Input";
import Btn from "../components/btn";
import { Alert } from "react-native";





export default function Recharge({route,navigation}){
   
    const [listActive,setListActive]=useState(false);
    const [selectedval,setSelectedVal]=useState('');
    const [amount,setAmount]=useState("");
    const [mobNum,setMobnum]=useState("")

    const pressHandler=(value)=>{
        setSelectedVal(value)
     }

  
  const inputHandler=(value)=>{
    setAmount(value)
  }
  const mobHandler=(value)=>{
    setMobnum(value)
  }

    const listActivehandler=(value)=>{
        setListActive(value)
    }

    const btnPressHandler=()=>{
        if(selectedval && mobNum.length == 10 && (amount|| route?.params?.amount)){
            Alert.alert(
                `Your ${mobNum} Sim is Recharged Successfully`, 
                 `You Recharged plan amount is ${amount || route?.params?.amount}`,
            )

          

        }else{
            Alert.alert(
                "Please provide valid data"
            )
        }
        
    }
    const plansHandler=()=>{
        navigation.navigate("Plans")
    
    }


    return(
        <View style={styles.container}>
       <DropDown
        pressHandler={pressHandler}
        selectedval={selectedval}
        placeholder="Select Operator"
        listActive={listActive}
        listActivehandler={listActivehandler}
      />
     
     <Input
      styleInput={styles.inputField}
      placeholder="Enter Mobile Number"
      changeHandler={mobHandler}
      keyboardType="numeric"
      value={mobNum}

      />


      <Input
      styleInput={styles.inputField}
      placeholder="Enter  Amount"
      changeHandler={inputHandler}
      keyboardType="numeric"
      value={route?.params?.amount? route.params.amount:amount}

      />
     
      <View style={styles.btnContainer}>
      <Btn
        title="View Plans"
        onPress={plansHandler}
        
      
      />
      <Btn
        title="submit"
        onPress={btnPressHandler}
        
      
      />
      </View>


      </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:20,
        padding:20
    },
  
    inputField:{
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderColor:'black',
    borderBottomWidth:2,
    borderRadius: 10,
    fontSize: 20,
    marginTop:10,
    color:'blue',
    marginVertical:20
    
  
    },
    plansContainer:{
        position:"absolute",
        top:140,
        left:300,
        fontSize:20,
    },
    planText:{
        color:'blue'

    },
    btnContainer:{
        marginTop:30,
        flexDirection:"row"
    }
 
  })

