import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBox from '../components/HeaderBox';
import LongCard from '../components/LongCard';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';
import { useGetClientDetails } from '../axios';

const ListScreen = () => {

    const [dataList, setDataList] = useState([{
        name: '',
        amount: 0,
        currency: '',
        time: '',
        date: '',
        status: '',
        logo: '',
        category: '',
        carbon_footprint: 0,
        fees: 0,
        visible: false,
        type: '',
        brand_partner: false
    }]);

    useEffect(() => { getDetails() }, []);
    const getDetails = async () => {
        try {
            console.log("Calling...");
            let data = await useGetClientDetails();
            console.log(data);
            console.log("done...");
            setDataList(data.transactions);

        } catch (error) {
            console.log("error:- " + error);
        }
    }

    const GetCurrency = (currency: string) => {
        switch (currency) {
            case 'GBP': return '£';
            case 'USD': return '$';
            case 'INR': return '₹';
            default: return '';
        }
    }

    return (
        <View style={styleList.container}>
            <HeaderBox title='List of Transactions' />
            <ScrollView style={{ paddingTop: 5, height: '100%' }}>
                {dataList.map((SingleUser: any, index: number) => {
                    let currency = GetCurrency(SingleUser.currency);
                    return (
                        <ShortCard key={index}
                            name={SingleUser.name}
                            category={SingleUser.category}
                            carbon_footprint={SingleUser.carbon_footprint}
                            fees={SingleUser.fees}
                            amount={SingleUser.amount}
                            currency={currency}
                            date={SingleUser.date}
                            time={SingleUser.date}
                            status={SingleUser.status}
                            logo={SingleUser.logo} />
                    )
                })}

            </ScrollView>
            <LongCard visible={false} name='Nisarg' brand_partner={false} type='card' category='Education' carbon_footprint={50} fees={200} amount={48} currency='$' date='2021-04-22' time='02:15' status='completed' logo="https://raw.githubusercontent.com/nisargdongare/ListDesign/main/src/logo/logo1.svg" />
        </View>
    )
}

export default ListScreen;
