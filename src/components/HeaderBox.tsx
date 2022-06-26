import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import{ primayColor} from '../styleList';

type StatusProp = {
    title: String
}

function HeaderBox(props: StatusProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default HeaderBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: primayColor,
        height: '10%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 20,
        paddingLeft: 15,
        paddingBottom: 10,
        color: 'white'
    }
});