import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBox from '../components/HeaderBox';
import LongCard from '../components/LongCard';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';

const ListScreen = () => {
    return (
        <View style={styleList.container}>
            <HeaderBox title='List of Transactions' />
            <ScrollView style={{ paddingTop: 5, height: '100%' }}>
                <ShortCard name='Nisarg' category='Education' carbon_footprint={50} fees={200} amount={48} currency='$' date='2021-04-22' time='02:15' status='completed' logo="https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/logo1.svg" />
            </ScrollView>
            <LongCard visible={true} name='Nisarg' brand_partner={false} type='card' category='Education' carbon_footprint={50} fees={200} amount={48} currency='$' date='2021-04-22' time='02:15' status='completed' logo="https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/logo1.svg" />
        </View>
    )
}

export default ListScreen;
