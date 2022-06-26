import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { primayColor } from '../styleList';

type StatusProp = {
    name: String,
    amount: number,
}

function ShortCard(props: StatusProp) {
    return (
        <View style={styles.Container}>
            <View style={styles.LeftContainer}>
                <Text style={styles.BrightText1} >{props.amount}</Text>
            </View>
            <View style={styles.RightContainer}></View>

        </View>
    )
}

export default ShortCard;

const styles = StyleSheet.create({
    Container: {
        height: '26%',
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

    },
    RightContainer: {
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: 'white',
        height: '100%',
        width: '73%',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10 },
        elevation: 3,

    },
    BrightText1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    }
});