import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerUnit}>
                <Image source={require('../../assets/Footer/history.png')} />
                <Text style={styles.footerUnitText}>Call Logs</Text>
            </View>
            <View style={styles.footerUnit}>
                <Image source={require('../../assets/Footer/inbox.png')} />
                <Text style={styles.footerUnitText}>Inbox</Text>
            </View>
            <View style={styles.footerUnitSelected}>
                <Image source={require('../../assets/Footer/keypad.png')} />
                <Text style={styles.footerUnitTextSelected}>Keypad</Text>
            </View>
            <View style={styles.footerUnit}>
                <Image source={require('../../assets/Footer/contacts.png')} />
                <Text style={styles.footerUnitText}>Contacts</Text>
            </View>
            <View style={styles.footerUnit}>
                <Image source={require('../../assets/Footer/account.png')} />
                <Text style={styles.footerUnitText}>Account</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: 60,
        borderTopColor: "#DDE5EC",
        borderTopWidth: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
        zIndex: 10,
        backgroundColor: "#fff",
    },
    footerUnit: {
        width: "18%",
        height:60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footerUnitSelected: {
        width: "18%",
        height:60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor:"#6A78D1",
        borderBottomWidth:3,
    },
    footerUnitImage: {
        height: 21,
        width: 25,
    },
    footerUnitText: {
        marginTop: 5,
        color: "#99ACC2",
        fontSize: 12,
        fontWeight: "700",
    },
    footerUnitTextSelected: {
        marginTop: 5,
        color: "#6A78D1",
        fontSize: 12,
        fontWeight: "700",
    },


});
