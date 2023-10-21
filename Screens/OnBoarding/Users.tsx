import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default function Users() {
    const [selected, setSelected] = useState(0);

    const handleSelect = (id: number) => {
        setSelected(id);
    };
    return (
        <View style={styles.main}>
            <View style={styles.viewUnitContainer}>
                <TouchableWithoutFeedback onPress={() => handleSelect(1)}>
                    <View style={selected === 1 ? styles.userUnitSelected : styles.userUnit}>
                        <View style={styles.select}>
                            <Image source={require('../../assets/Workspace/userUnselected.jpg')} style={styles.selectIcon} />
                        </View>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/Workspace/team.png')} style={styles.iconImage} />
                        </View>
                        <View style={styles.text}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>For Myself</Text>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.desc}>Get a business phone number.Make and Receive calls, manage call logs and track calls. </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.viewUnitContainer}>
                <TouchableWithoutFeedback onPress={() => handleSelect(2)}>
                    <View style={selected === 2 ? styles.userUnitSelected : styles.userUnit}>
                        <View style={styles.select}>
                            <Image source={require('../../assets/Workspace/userSelected.jpg')} style={styles.selectIcon} />
                        </View>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/Workspace/team.png')} style={styles.iconImage} />
                        </View>
                        <View style={styles.text}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>For My Team</Text>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.desc}>Collaborate with your team andmanage leads, tasks, sales and customer support, effortlessly. </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: "center",
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
        paddingTop: 20,
    },
    container: {
        width: "100%",
        position: "relative",
        paddingTop: 60,
    },
    viewUnitContainer: {
        width: "100%",
        height: 125,
        marginBottom: 20,
    },
    userUnit: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderColor: "#DFE3EB",
        borderWidth: 1,

    },
    userUnitSelected: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderColor: "#00A4BD",
        borderWidth: 1,
        backgroundColor: "#E5F5F8"
    },
    icon: {
        width: "25%",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",

    },
    iconImage: {
        width: 50,
        height: 50,
    },
    text: {
        width: "75%",
        paddingLeft: 5,
        paddingRight: 10,

    },
    header: {
        width: "100%",
        marginBottom: 5
    },
    headerText: {
        color: "#33475B",
        fontSize: 20,
        fontWeight: "700",
    },
    desc: {
        color: "#516F90",
        fontSize: 12,
        fontWeight: "400",
    },
    select: {
        position: "absolute",
        top: 10,
        right: 20,
    },
    selectIcon: {
        width: 18,
        height: 18,
    }
})