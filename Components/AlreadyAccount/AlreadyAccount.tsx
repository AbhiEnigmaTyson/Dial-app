import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ProfileScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'SignUp'  
>;

export default function AlreadyAccount({value,screen}:{value:string,screen:string}) {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const handlePress=()=>{
        navigation.navigate(screen)
    }
    return (
        <View style={styles.company}>
            <TouchableOpacity style={styles.loginOther} onPress={handlePress}>
                <Text style={styles.already}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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

});
