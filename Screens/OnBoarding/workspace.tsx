import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount';
import EmailWarning from '../../Components/EmailWarning/EmailWarning';
import WelcomeText from '../../Components/WelcomeText/WelcomeText';
import SvgUri from 'expo-svg-uri';
export default function Workspace() {
    return (
        <View style={styles.main}>
            <View style={styles.company}>
                <Image source={require('./assets/verify.png')} style={styles.cornerImage} />
            </View>
            <SvgUri 
                width={100}
                height={100}
                source={require('../../assets/Workspace/workspace.svg')} // Use require for local SVG files
            />
            {/* <WelcomeText text1={"Verify phone number"} /> */}
            <View style={styles.companyNew}>
                <Text style={styles.textColor}>Phone Number</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        height: 100,
        width: 100,
        backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%);",
        top: 0,
        left: 0,
    },
    cornerImage: {
        width: 110,
        height: 180,
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,

    },
    companyNew: {
        width: "90%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        borderBottomWidth: 1,
        padding: 10,
        paddingBottom: 15,
        borderBottomColor: "#7CCFDC;",
    },
    textColor: {
        color: "#CBD6E2",
        fontSize: 17,
    },
    companyTextBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
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