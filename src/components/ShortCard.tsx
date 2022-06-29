import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { primayColor, whiteShadeColor1, whiteShadeColor2, darkShadeColor1, darkShadeColor2 } from '../styleList';
import { SvgUri } from 'react-native-svg';
import { Foundation } from '@expo/vector-icons';
import { initialDataStatusProp } from '../CommonFunctions';


function ShortCard(props: initialDataStatusProp) {

    return (
        <View style={styles.Container}>

            <View style={styles.LeftContainer}>
                <View style={{ height: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.BrightText1} >{props.currency}</Text>
                    <Text style={styles.BrightText1} >{props.amount}</Text>
                </View>
                <Text style={styles.BrightText2} >{props.time}</Text>
                <Text style={styles.BrightText3} >{props.date}</Text>
            </View>

            <View style={[props.status == "completed" ? { backgroundColor: 'green' } : { backgroundColor: 'red' }, styles.StripContainer]}></View>
            <View style={styles.MidContainer}>
                <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                    <Text style={styles.DarkText1} >{props.name}</Text>
                </View>
                <View style={{ width: '100%', height: '1%', backgroundColor: whiteShadeColor2, marginHorizontal: 15, marginTop: 5 }}></View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.DarkText2} >{props.category}</Text>
                </View>
                <View style={{ width: '100%', height: '50%', margin: 5, display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'flex-end', paddingBottom:15 }}>
                        <Foundation name="foot" size={35} color={darkShadeColor2} />
                        <Text style={[styles.DarkText3, { marginLeft: 7 }]} >{props.carbon_footprint}</Text>
                    </View>
                    <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.DarkText1, { marginLeft: 7 }]} >Fees</Text>
                    <Text style={[styles.DarkText3, { marginLeft: 7 }]} >{props.fees}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.RightContainer}>
                <View style={styles.iconContainer} >
                    <SvgUri width="100%" height="100%" uri={props.icon} />
                </View>
            </View>

        </View>
    )
}

export default ShortCard;

const styles = StyleSheet.create({
    Container: {
        height: 150,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        backgroundColor: "#0000",
    },
    LeftContainer: {
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        backgroundColor: primayColor,
        height: '100%',
        width: '27%',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 20, height: 20 },
        elevation: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },

    StripContainer: {
        height: '100%',
        width: '2%',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10 },
        elevation: 3,
    },

    MidContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '50%',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10 },
        elevation: 3,
    },

    RightContainer: {
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: 'white',
        height: '100%',
        width: '21%',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 0, height: 10 },
        display: 'flex',
        justifyContent: 'center'
    },
    iconContainer: {
        height: 100,
        width: 60,
    },

    BrightText1: {
        color: whiteShadeColor1,
        fontWeight: 'bold',
        fontSize: 20,
    },
    BrightText2: {
        color: whiteShadeColor2,
        fontWeight: 'bold',
        fontSize: 10,
    },
    BrightText3: {
        color: whiteShadeColor1,
        fontSize: 12,
    },
    DarkText1: {
        color: darkShadeColor1,
        fontWeight: 'bold',
        fontSize: 12,
    },
    DarkText2: {
        color: darkShadeColor2,
        fontSize: 12,
    },
    DarkText3: {
        color: darkShadeColor2,
        fontSize: 20,
    }
});