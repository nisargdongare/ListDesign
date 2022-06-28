import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBox from '../components/HeaderBox';
import LongCard from '../components/LongCard';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';
import { useGetClientDetails } from '../axios';
import { GetCurrency, GetTime, GetDate } from '../CommonFunctions';

const ListScreen = () => {
    const [ShowDetailView, setShowDetailView] = useState(false);
    const [dataList, setDataList] = useState([{
        name: '',
        amount: 0,
        currency: '',
        time: '',
        created_at: '',
        status: '',
        icon: '',
        category: '',
        carbon_footprint: 0,
        fees: 0,
        visible: false,
        type: '',
        brand_partner: false
    }]);
    const [SingleData, setSingleData] = useState({
        name: '',
        amount: 0,
        currency: '',
        time: '',
        created_at: '',
        status: '',
        icon: '',
        category: '',
        carbon_footprint: 0,
        fees: 0,
        visible: false,
        type: '',
        brand_partner: false
    });

    useEffect(() => { getDetails() }, []);
    const getDetails = async () => {
        try {
            console.log("Calling...");
            let data = await useGetClientDetails();
            // console.log(data);
            console.log("done...");
            setDataList(data.transactions);

        } catch (error) {
            console.log("error:- " + error);
        }
    }


    const DetailWindow = (action: boolean, SingleUser: any) => {
        setSingleData(SingleUser);
        setShowDetailView(action);
    }

    return (
        <View style={styleList.container}>
            <HeaderBox title='List of Transactions' />
            <ScrollView style={{ paddingTop: 5, height: '100%' }}>
                {dataList.map((SingleUser: any, index: number) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => DetailWindow(true, SingleUser)} >
                            <ShortCard key={index}
                                name={SingleUser.name}
                                category={SingleUser.category}
                                carbon_footprint={SingleUser.carbon_footprint}
                                fees={SingleUser.fees}
                                amount={SingleUser.amount}
                                currency={GetCurrency(SingleUser.currency)}
                                date={GetDate(SingleUser.created_at)}
                                time={GetTime(SingleUser.created_at)}
                                status={SingleUser.status}
                                icon={SingleUser.icon} />
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <LongCard
                visible={ShowDetailView} 
                setShowDetailView={setShowDetailView} 
                name={SingleData.name} 
                brand_partner={SingleData.brand_partner} 
                type={SingleData.type} 
                category={SingleData.category} 
                carbon_footprint={SingleData.carbon_footprint} 
                fees={SingleData.fees} 
                amount={SingleData.amount} 
                currency={SingleData.currency} 
                date={GetDate(SingleData.created_at)} 
                time={GetTime(SingleData.created_at)} 
                status={SingleData.status} 
                icon={SingleData.icon} />
        </View>
    )
}

export default ListScreen;
