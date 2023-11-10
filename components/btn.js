import { Pressable,StyleSheet,Text } from "react-native";

export default function Btn(props){
    const{onPress,title}=props
    return(
        <Pressable onPress={onPress}>
             <Text style={styles.btnStyle}>{title}</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    btnStyle:{
        backgroundColor:"blue",
        color:"white",
        borderWidth:2,
        borderColor:'white',
        textAlign:'center',
        marginTop:20,
        padding:10,
        fontSize:16,
        borderRadius:10,
        minWidth:180
    },
    
})