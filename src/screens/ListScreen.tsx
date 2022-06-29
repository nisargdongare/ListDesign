import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View , Alert ,BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBox from '../components/HeaderBox';
import LongCard from '../components/LongCard';
import ShortCard from '../components/ShortCard';
import { styleList } from '../styleList';
import { useGetClientDetails } from '../axios';
import { GetCurrency, GetStringSplit, initialDataState, getCacheData} from '../CommonFunctions';
// import { useNavigation } from '@react-navigation/native';

const ListScreen = ({ navigation }: any) => {

    const [ShowDetailView, setShowDetailView] = useState(false);
    const [dataList, setDataList] = useState([{ initialDataState }]);
    const [SingleData, setSingleData] = useState(initialDataState);
    // const nav = useNavigation();
    
    // useEffect(
    //     () => {
    //     navigation.addListener('beforeRemove', (event:any) => {
    //         // Prevent default behavior
    //         event.preventDefault();

    //         Alert.alert(
    //             'Discard Details',
    //             'Are you sure you want to Exit App?',
    //             [
    //                 { text: 'No', style: 'cancel', onPress: () => { } },
    //                 {
    //                     text: 'Yes',
    //                     style: 'destructive',
    //                     onPress: () => BackHandler.exitApp()
    //                 },
    //             ],
    //         );
    //     })
    // }, [nav])

    useEffect(() => { getDetails() }, []);
    const getDetails = async () => {
        try {
            let value: any = await getCacheData('ListDetail');
            setDataList(value.transactions);
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
                            <ShortCard
                                key={index}
                                visible={ShowDetailView}
                                setShowDetailView={setShowDetailView}
                                name={SingleUser.name}
                                brand_partner={SingleUser.brand_partner}
                                type={SingleUser.type}
                                category={SingleUser.category}
                                carbon_footprint={SingleUser.carbon_footprint}
                                fees={SingleUser.fees}
                                amount={SingleUser.amount}
                                currency={GetCurrency(SingleUser.currency)}
                                date={GetStringSplit(SingleUser.created_at, 0)}
                                time={GetStringSplit(SingleUser.created_at, 1)}
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
                date={GetStringSplit(SingleData.created_at, 0)}
                time={GetStringSplit(SingleData.created_at, 1)}
                status={SingleData.status}
                icon={SingleData.icon} />
        </View>
    )
}

export default ListScreen;
