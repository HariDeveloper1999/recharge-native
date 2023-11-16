import { Text,StyleSheet,View,FlatList } from "react-native"
import DropDown from "../components/dropDown"
import { useEffect, useState } from "react"
import Input from "../components/Input";
import Btn from "../components/btn";
import { Alert } from "react-native";
import { OPERATOR_DATA, DTH_DATA } from "../constants/data";





export default function Recharge({route,navigation}){
   
    const [listActive,setListActive]=useState(false);
    const [selectedval,setSelectedVal]=useState('');
    const [amount,setAmount]=useState("");
    const [mobNum,setMobnum]=useState("");
    const [rechargeData,setrechargeData]=useState([]);
    const [bal,setBal]=useState(5000)

    const pressHandler=(value)=>{
        setSelectedVal(value)
        setListActive(false)
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
        let uniId=Math.ceil(Math.random()*100)
      
        if(selectedval && mobNum.length == 10  &&(amount|| route?.params?.amount)){
            if(amountVal <= bal){
            
            Alert.alert(
                `Your ${mobNum} is Recharged Successfully`, 
                 `You Recharged plan amount is ${amount || route?.params?.amount}`,
            )
            
            setrechargeData((prev)=>[...prev,{id:uniId,num:mobNum,status:"Success",sim:selectedval}])

            setAmount("");
            setSelectedVal('');
            setMobnum("")
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
            setrechargeData((prev)=>[...prev,{id:uniId,num:mobNum,status:"Failed",sim:selectedval}])
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
        <View style={styles.bg} >
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
        listData={route.name == "Mobile Recharge" ? OPERATOR_DATA:DTH_DATA}
      />
     
     <Input
      styleInput={styles.inputField}
      placeholder={route.name == "Mobile Recharge"?"Enter Mobile Number":'Enter DTH Number'}
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
      keyExtractor={(item)=>item.id}
      renderItem={(item)=>renderDetails(item.item)}
      
      
      />
      </View>
}

      </View>
  
     
      </>
    )
}

const styles=StyleSheet.create({
    container:{
       
        marginVertical:20,
        padding:18,
      
    },
    bg:{
      flex:3,
      backgroundColor:'#cdde3a'
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
   
   
    btnContainer:{
        marginTop:10,
        flexDirection:"row"
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

