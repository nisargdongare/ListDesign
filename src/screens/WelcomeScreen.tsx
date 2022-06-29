import React from 'react'
import { Text, View } from 'react-native';
import { useGetClientDetails } from '../axios';
import { CacheData } from '../CommonFunctions';
import { darkShadeColor1, primayColor, styleList, whiteShadeColor1 } from '../styleList';

const WelcomeScreen = ({ navigation }: any) => {
    setTimeout(async () => {
        try {
            let data = await useGetClientDetails();
            let value = false;
            if (data) {
                value = await CacheData('ListDetail', data);
            }
            if (!value) {
                window.alert("No network access. Switching to internal storage data !");
            }
            navigation.push('ListScreen');
        } catch (error) {
            console.log("error:- " + error);
        }
    }, 2000);
    return (
        <View style={[styleList.container, { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: primayColor }]} >
            <Text style={{ color: whiteShadeColor1, fontSize: 25, fontWeight: 'bold' }} >WELCOME</Text>
        </View>
    )
}

export default WelcomeScreen;