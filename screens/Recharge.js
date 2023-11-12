import { Text,StyleSheet,View,FlatList } from "react-native"
import DropDown from "../components/dropDown"
import { useEffect, useState } from "react"
import Input from "../components/Input";
import Btn from "../components/btn";
import { Alert } from "react-native";





export default function Recharge({route,navigation}){
   
    const [listActive,setListActive]=useState(false);
    const [selectedval,setSelectedVal]=useState('');
    const [amount,setAmount]=useState("");
    const [mobNum,setMobnum]=useState("");
    const [rechargeData,setrechargeData]=useState([]);
    const [bal,setBal]=useState(5000)
    

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
        let amountVal = parseInt(amount)
      
        if(selectedval && mobNum.length == 10  &&(amount|| route?.params?.amount)){
            if(amountVal <= bal){
            
            Alert.alert(
                `Your ${mobNum} Sim is Recharged Successfully`, 
                 `You Recharged plan amount is ${amount || route?.params?.amount}`,
            )
            
            setrechargeData((prev)=>[...prev,{num:mobNum,status:"Success",sim:selectedval}])

            setAmount("");
            setSelectedVal('');
            setMobnum("")
            setListActive(true)
            setBal(bal-amountVal)
            }
            else{
                Alert.alert(
                    "Please Check balance"
                )

            }
          
            

          

        }else{
            Alert.alert(
                "Please provide valid data"
            )
            setrechargeData((prev)=>[...prev,{num:mobNum,status:"Failed",sim:selectedval}])
        }
        
    }
    const plansHandler=()=>{
        navigation.navigate("Plans")
    
    }
    useEffect(()=>{
      if(route?.params?.amount){
        setAmount(route.params.amount)
      }
    },[route])

    const renderDetails=(item)=>{
        return(
            <>
            <View style={[styles.statusContainer,item.status=="Failed" && styles.statusBg]}>
            <Text style={styles.stText}>{item.sim}</Text>
            <Text style={styles.stText}>{item.num}</Text>
            <Text style={styles.stText}>{item.status}</Text>
            </View>
            </>
        )

    }

    return(
        <>
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balance}>Balance:{bal}</Text>
            </View>
           
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
      value={amount}

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
      <View>
   
      </View>
      

    


      </View>
    { rechargeData.length > 0 &&
      <View style={styles.flatContainer}>
      <Text style={styles.rcgHead}>Recharge History</Text>
      <FlatList
      data={rechargeData}
      keyExtractor={(item)=>console.log("it123",item)}
      renderItem={(item)=>renderDetails(item.item)}
      
      
      />
      </View>
}
     
      </>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:3,
        marginVertical:20,
        padding:18,
      
    },
    balanceContainer:{
        flexDirection:'row',
        justifyContent:"flex-end",
        fontSize:20,
        
    },
    balance:{
        fontSize:20,
        color:'blue'
    },
   
  
    rcgHead:{
        color:"#fcba03",
        textDecorationLine:"underline",
        fontSize:18,
        fontWeight:'bold',
        fontStyle:'italic',
        
        
       
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
    },
    customerContainer:{
        position:'relative',
    } ,  
    customerText:{
        position:'absolute',
        top:290,
        backgroundColor:'#3a9cde',
        color:'white',
        width:"100%" ,
        paddingVertical:20,
        textAlign:"center",
        fontSize:20  

    },
    statusContainer:{
    
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'green',
        borderRadius:5,
        paddingVertical:5,
        marginTop:20,
    
    },
    stText:{
      color:'white'
    },
    statusBg:{
        backgroundColor:"red"
    },
    flatContainer:{
        backgroundColor:'#a748fa',
        padding:10,
        borderRadius:10,
        flex:1
    }
 
  })

