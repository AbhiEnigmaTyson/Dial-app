import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount';
import { RootStackParamList } from '../../App';
import EmailWarning from '../../Components/EmailWarning/EmailWarning';
import { LinearGradient } from 'expo-linear-gradient';
type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SignUp'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};


export default function SignUp({ navigation }: Props) {

    let handleSignUp = () => {
        navigation.navigate('SignUpForm')
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.company}>
                    {/* <View style={styles.signupLogo}>
                        <Image source={require('../../assets/SignUp/dialImage.png')} style={styles.signupLogoIcon} />
                    </View> */}
                    <LinearGradient colors={['#00F0B2', '#01DEE2']} style={styles.signupLogo}>
                        <Image source={require('../../assets/SignUp/dialImage.png')} style={styles.signupLogoIcon} />
                    </LinearGradient>
                </View>
                <View style={styles.company}>
                    <Text style={styles.welcomeText}>Phone system for </Text>
                    <Text style={styles.welcomeText}>modern businesses</Text>
                </View>
                <View style={styles.space}>

                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
                        <Text style={styles.loginButtonText}>Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginGoogle}>
                        <Image source={require('../../assets/SignUp/logo.png')} style={styles.googleIcon} />
                        <Text>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.extra}>

                </View>
                <AlreadyAccount value={"I already have a Awesome Dial account"} screen={"LoginEmail"} />
                {/* <View style={styles.companyWarning}>
                    <Text style={styles.warningText}>By creating an account, you’re opting-in to receive marketing and product updates by email. You can always unsubscribe, any time. By creating an account you agree to our Terms and Privacy Policy</Text>
                </View> */}
                <EmailWarning />
            </View>
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
        padding: 20,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        width: "100%",
        position: "relative",
        paddingTop: 60,
    },
    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: "linear-gradient(90deg, rgba(0,240,178,1) 0%, rgba(1,222,226,1) 71%);"
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 26,
        fontWeight: "bold",
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
    extra: {
        marginTop: 20,
    },
    companyWarning: {
        position: "absolute",
        bottom: 0,
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
    }

});
