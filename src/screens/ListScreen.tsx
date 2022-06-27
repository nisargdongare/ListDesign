import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import HeaderBox from '../components/HeaderBox';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';
const ListScreen = () => {
    return (
        <View style={styleList.container}>
            <HeaderBox title='List of Transactions' />
            <View style={{ paddingTop: 5 }}>
                <ShortCard name='Nisarg' amount={48} currency='$' date='2021-04-22' time='02:15' status='completed' logo="https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/31.svg" />
                <ShortCard name='Pavan Dongare' amount={740} currency='$' date='2021-04-22' time='04:50' status='completed' logo='https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/logo4.svg' />
                <ShortCard name='Amruta Avinash Chavan' amount={30} currency='$' date='2021-04-22' time='02:10' status='unsuccessful' logo='https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/logo6.svg' />
            </View>
        </View>
    )
}

export default ListScreen;

const styles = StyleSheet.create({

});