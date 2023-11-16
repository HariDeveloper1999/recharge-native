import { View,TextInput, FlatList,StyleSheet,Text, Pressable, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function DropDown({listData,placeholder,listActive,listActivehandler,pressHandler,selectedval}){

   const[textValue,setTextValue]=useState("");
   const [filterData,setFilterData]=useState([])
  

   useEffect(()=>{
      if(textValue.length > 0){
         let converrtedValue=textValue.toLowerCase();
        let data= listData?.filter((item)=>item.value.includes(converrtedValue))
        
        setFilterData(data?.length > 0 && data)

      }

   },[textValue])

   const changeHandler=(enteredValue)=>{
          listActivehandler(true)
         setTextValue(enteredValue)
   }
    
    useEffect(()=>{
       if(selectedval.length>0){
        listActivehandler(false)
     }
    },[selectedval])


    const renderItem=(item)=>{
       return(
          <Text style={styles.textDrop}  onPress={()=>{pressHandler(item.item.label),setTextValue(item.item.label)}}>{item.item.label}</Text>
       )
  

    }




return(


   <>
   <View style={styles.inputContainer}>
      {/* <TextInput
    //   onChangeText={changeHandler}
       value={selectedval}
    //    type="text"
       placeholder={placeholder}
       onPressIn={()=>listActivehandler(true)}
        
      /> */}
      
      <Text style={styles.text} onPress={()=>{ listActivehandler(true)}}>{selectedval||placeholder}</Text>
   </View>
   
   
  {
    listActive &&
    <View style={styles.dataContainer} onPress={()=>{listActivehandler(false)}}>
      <TextInput value={textValue} onChangeText={changeHandler} style={styles.search}   placeholder={"Search"} />
        <FlatList
           data={textValue.length > 0 && filterData?.length > 0 ? filterData :listData}
           keyExtractor={(item)=>item.id}
           renderItem={(item)=>renderItem(item)}
        
        />
      </View>
  }

     

   
   
   
   </>
)


}

const styles=StyleSheet.create({
    inputContainer:{
        borderBottomWidth:2,
        borderColor:"black",
       fontSize:20,
        borderRadius:10,
        paddingVertical:10,
        marginVertical:20,


    },
    text:{
      fontSize:20,
      color:'blue'
    },
    textDrop:{
        fontSize:16,
        width:250,
        paddingHorizontal:30,
        paddingVertical:3,
        color:'white',
       
       
       
    },
    dataContainer:{
        position:"relative",
        left:50,
        top:-20,
        width:250,
        marginTop:-10,
        height:100,
        backgroundColor:'#25272a',
        borderRadius:10
        
    },
    search:{
      backgroundColor:"#32a879",
      color:"white"
    }
   

})
