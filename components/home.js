import { Text, View, StyleSheet, Image } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import Btn from "./btn";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { LOGDATA } from "../constants/data";

export default function Home(props) {
  const { isLogin } = props;
  const navigation = useNavigation();
  const [number, setNumber] = useState();
  const [pwd, setPwd] = useState();
  const [name, setName] = useState();
  const [isHide, setHide] = useState(true);
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const changeHandler = (event, placeholder) => {
    switch (placeholder) {
      case "Enter Mobile Number":
        setNumber(event);
        break;
      case "Enter password":
        setPwd(event);
        break;
      case "Enter Name":
        setName(event);
        break;
    }
  };
  const btnPressHandler = () => {
    if (isLogin) {
      const validataion = LOGDATA.find(
        (data) => data.mobNumber == number && data.password == pwd
      );

      if (validataion) {
        navigation.navigate("Recharge");
      } else {
        Alert.alert("Please Enter correct details");
      }
    } else {
      if (name && number && pwd) {
        const data = {
          name: name,
          mobNumber: number,
          password: pwd,
        };

        LOGDATA.push(data);
        navigation.navigate("Login");
      } else {
        Alert.alert("Please Enter correct details");
      }
    }
  };
  const linkHandler = () => {
    isLogin ? navigation.navigate("Signup") : navigation.navigate("Login");
  };

  const iconHandler = () => {
    setHide(!isHide);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.imageStyle}
          />
        </View>

        {!isLogin && (
          <Input
            type="text"
            value={name}
            changeHandler={changeHandler}
            placeholder="Enter Name"
          />
        )}

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

        <Btn title={isLogin ? "Login" : "Sign up"} onPress={btnPressHandler} />

        <Text style={styles.textStyle}>
          {isLogin ? (
            <Text>
              {" "}
              If You Don't have account try to{" "}
              <Text style={styles.link} onPress={linkHandler}>
                Signup
              </Text>
            </Text>
          ) : (
            <Text>
              {" "}
              If You have account try to{" "}
              <Text style={styles.link} onPress={linkHandler}>
                Login
              </Text>{" "}
            </Text>
          )}
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
      {/* <View style={{position:'relative'}} >
          <View style={styles.customerContainer}>
               <Text style={styles.customerText}>Contact us : developer.haribabuperla@gmail.com</Text>
        </View>
       </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
    marginTop: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  customerContainer: {
    position: "absolute",
    top: "-900%",
    width: "100%",
  },

  customerText: {
    backgroundColor: "#3a9cde",
    color: "white",
    width: "100%",
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 18,
    borderWidth: 2,
    borderColor: "orange",
    borderStyle: "dotted",
  },
});
