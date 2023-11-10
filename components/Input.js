import { TextInput,StyleSheet,View ,Pressable} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { useState } from "react"
export default function Input(props){
    const{changeHandler,value,type,placeholder,keyboardType,isSecure,iconHandler,styleInput}=props
    
    return(
    <>
        <TextInput 
          type={type}
          value={value}
          onChangeText={(event)=>changeHandler(event,placeholder)}
          placeholder={placeholder}
          style={styleInput? styleInput:styles.inputClass}
          keyboardType={keyboardType ? keyboardType:"default" }
          secureTextEntry={isSecure}
        
        />
        <>
          {
            type == "password" &&
            <Pressable style={styles.absStyle} onPress={iconHandler}>
            <Ionicons name={isSecure ? "eye-off-outline" :"eye-outline"} size={30} />
            </Pressable>
          }
        </>
        </>
          
        
    )
}
const styles=StyleSheet.create({
  
  inputClass:{
  paddingVertical: 8,
  paddingHorizontal: 6,
  borderColor:'black',
  borderWidth:2,
  borderRadius: 10,
  fontSize: 16,
  marginTop:20

  },
  absStyle:{
    position:'relative',
    top:-40,
    left:300,
  
    
  }
})