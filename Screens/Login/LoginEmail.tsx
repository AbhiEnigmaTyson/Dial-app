import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount';
import EmailWarning from '../../Components/EmailWarning/EmailWarning';
import WelcomeText from '../../Components/WelcomeText/WelcomeText';
import { StackNavigationProp } from '@react-navigation/stack';
import { userLogin } from '../../Services/Routes/LoginRoute';
import { RootStackParamList } from '../../App';
import * as SQLite from 'expo-sqlite'
import { createTable } from '../../Services/DB/dbServices';


type ProfileScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'SignUp'  
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function LoginEmail({navigation}: Props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin=()=>{
        if(email==""){
            ToastAndroid.show("Please Add Email",ToastAndroid.SHORT);
            return;
        }
        if (password == "") {
            ToastAndroid.show('Please Add Password', ToastAndroid.SHORT);
            return;
        }
        (async()=>{
            if(await userLogin({email,password})){
                ToastAndroid.show('Sign Up Successful', ToastAndroid.SHORT);
                setEmail("")
                setPassword("")
                navigation.navigate('Main')
            }
            else{
                ToastAndroid.show('Something Went Wrong', ToastAndroid.SHORT);
            }
        }

        )()
        // db.transaction(tx => {
        //     tx.executeSql('INSERT INTO items (email, password) values (?, ?)', [email, password],
        //       (txObj, resultSet) => { ToastAndroid.show('Sign Up Successful', ToastAndroid.SHORT);navigation.navigate('Main')},
        //       )
        //   })
    }  
    useEffect(()=>{
        createTable()
    },[])

    return (
        <View style={styles.main}>
            <View style={styles.cornerUnit}>
                <Image source={require('../../assets/Login/Vector.png')} style={styles.cornerImage} />
                
            </View>
            <WelcomeText text1={"Log in to your"} text2={"Awesome Dial account"}/>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    label={<Text style={styles.labelStyle}>{"Email"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="email"  />}
                />
            </View>
            <View style={styles.company}> 
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    value={password}
                    secureTextEntry
                    onChangeText={text=>setPassword(text)}
                    label={<Text style={styles.labelStyle}>{"Password"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="key"  />}
                />
            </View>
            <View style={styles.company}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText} >Login</Text>
                </TouchableOpacity>
            </View>
            <AlreadyAccount value={"Forget Password ?"} screen={"SignUpForm"}/>
            <AlreadyAccount value={"Or, Create an account"} screen={"SignUpForm"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 100,
    },
    container: {
        width: "100%",
        position: "relative",
    },
    cornerUnit: {
        position: "absolute",
        height: 150,
        width: 150,
        backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%);",
        top: 0,
        left: 0,
    },
    cornerImage: {
        width: "100%",
        height: "100%",
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    companyTextBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:30,
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 20,
        fontWeight: "bold",
    },
    inputStyles: {
        width: "100%",
        height: 42,
        marginBottom: 5,
        backgroundColor: "#fff",
    },
    labelStyle: {
        backgroundColor: "transparent",
        zIndex: 100000000,
        width: 20,
        fontSize: 15,
        color: "#CBD6E2",
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    loginButton: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#1EC6D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },

})