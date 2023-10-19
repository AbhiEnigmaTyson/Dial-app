import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount';
import EmailWarning from '../../Components/EmailWarning/EmailWarning';
import WelcomeText from '../../Components/WelcomeText/WelcomeText';
export default function SignUpForm() {
    return (
        <View style={styles.main}>
            <View style={styles.cornerUnit}>
                <Image source={require('../../assets/SignUp/Vector.png')} style={styles.cornerImage} />
            </View>
            <WelcomeText text1={"Create Your"} text2={"Awesome Dial account"}/>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"First Name"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="account"  />}
                />
            </View>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"Last Name"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="account" />}
                />
            </View>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"Email"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="email"  />}
                />
            </View>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"Company"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="account" />}
                />
            </View>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"Phone"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="phone"  />}
                />
            </View>
            <View style={styles.company}>
                <TextInput
                    style={styles.inputStyles}
                    mode='outlined'
                    label={<Text style={styles.labelStyle}>{"Password"}</Text>}
                    outlineStyle={{ borderColor: "#D6DFE8" }}
                    left={<TextInput.Icon icon="key"  />}
                />
            </View>
            <View style={styles.company}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Create an account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.extra}>

                </View>
            <AlreadyAccount value={"I already have a Awesome Dial account"} screen={"LoginEmail"}/>
            {/* <EmailWarning /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
       flex:1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
       paddingTop:60,
    },
    container: {
        width: "100%",
        position: "relative",
        
    },
    extra:{
        marginTop:20,
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