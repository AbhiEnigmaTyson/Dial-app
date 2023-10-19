import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
        <View style={styles.main}>
            <View style={styles.corner}></View>
            <View style={styles.container}>
                <View style={styles.company}>
                    <View style={styles.companyLogo}>
                        <Image source={require('./assets/dial-icon.jpg')} style={styles.logoIcon} />
                    </View>
                    <Text style={styles.companyText}>Welcome Back !</Text>
                </View>
                <View style={styles.company}>
                    <Image source={require('./assets/loginImage.jpg')} style={styles.loginImage} />
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text>Login with your email</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginGoogle}>
                        <Text>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginOther}>
                        <Text>Or, Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
    },
    container: {
        width: "100%",
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
    },
    loginGoogle: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D6DFE8",
    },
    loginOther: {
        width: "100%",
        height: 46,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    corner: {
        position: "absolute",
        height: 175,
        width: 175,
        borderRadius: 85,
       
        top: -40,
        left: -40,

    }
});
