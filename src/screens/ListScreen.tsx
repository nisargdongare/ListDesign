import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import HeaderBox from '../components/HeaderBox';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';
const ListScreen = () => {
    return (
        <View style={styleList.container}>
            <HeaderBox title='List of Transactions' />
            <View style={{paddingTop:5}}>
                <ShortCard name='Nisarg' amount={48} />
                <ShortCard name='Nisarg' amount={740} />
                <ShortCard name='Nisarg' amount={30} />
            </View>
        </View>
    )
}

export default ListScreen;

const styles = StyleSheet.create({

});