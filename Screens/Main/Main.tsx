import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount';

import { RootStackParamList } from '../../App';
import * as SQLite from 'expo-sqlite'
import Footer from '../../Components/Footer/Footer';
import WelcomeText from '../../Components/WelcomeText/WelcomeText';
const db = SQLite.openDatabase('db.testDb') // returns Database object
type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SignUp'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};


export default function Main({ navigation }: Props) {
    const [data, setData] = useState([])
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // const fetchData = () => {
    //     db.transaction(tx => {
    //         // sending 4 arguments in executeSql
    //         tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
    //             // success callback which sends two things Transaction object and ResultSet Object
    //             (txObj, { rows: { _array } }) => setData(_array)
    //             // failure callback which sends two things Transaction object and Error

    //         ) // end executeSQL
    //     }) // end transaction
    // }

    return (
        <View style={styles.main}>
            <View style={styles.header}></View>
            <View style={styles.container}>
                <WelcomeText text1={"Welcome To"} text2={"Awesome Dial"}></WelcomeText>
            </View>
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',

    },
    container: {
        flex: 1,
        width: "100%",
        position: "relative",
        padding: 20,
        paddingTop: 10,
        backgroundColor: "#dde5ec",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
    },
    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: "#00F0B2"
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 15,
    },
    warningText: {
        color: "#99ACC2",
        fontSize: 10,
        fontWeight: "bold",
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    signupLogoIcon: {
        position: "absolute",
        height: 190,
        width: 120,
        bottom: 0,
        left: 55
    },
    signupBack: {
        position: "absolute",
        width: 265,
        height: 265,
        borderRadius: 132,
        backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%)",
    },
    space: {
        marginBottom: 30,
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    companyWarning: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    companyLogo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoIcon: {
        width: 60,
        height: 60,
    },
    companyText: {
        color: "#33475B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
    },
    loginImage: {
        width: 200,
        height: 200,
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
    loginGoogle: {
        width: "100%",
        position: "relative",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D6DFE8",
        marginTop: 10,
        marginBottom: 10,
    },
    googleIcon: {
        position: "absolute",
        left: 15,
    },
    loginOther: {
        width: "100%",
        height: 46,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    already: {
        color: "#33475B",
        fontSize: 13,
        fontWeight: "bold",
    },
    header: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        zIndex: 10,
    },

});
