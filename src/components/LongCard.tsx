import { Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { whiteShadeColor2, darkShadeColor1 } from '../styleList';
import { SvgUri } from 'react-native-svg';
import { GetCurrency, initialDataStatusProp } from '../CommonFunctions';

function LongCard(props: initialDataStatusProp) {

    const displayBoldContent = (key: string, value: any, line: boolean = true, Color: any = darkShadeColor1, size: number = 15) => {
        let UppercaseValue = (typeof value === 'string') ? value.toUpperCase() : value;
        return (
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.Text2} >{key.toUpperCase()}</Text>
                    <Text style={{ alignSelf: 'center', fontSize: size, fontWeight: 'bold', color: Color }} >{UppercaseValue}</Text>
                </View>
                {line && <Text style={styles.Text2} >_____________________________________</Text>}
            </View>
        )
    }

    const displayContent = (key: string, value: any) => {
        let UppercaseValue = (typeof value === 'string') ? value.toUpperCase() : value;
        return (
            <View style={{ marginHorizontal: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text2} >{key.toUpperCase()}</Text>
                <Text style={styles.Text2} >{UppercaseValue}</Text>
            </View>
        )
    }
    return (
        <Modal transparent={true} visible={props.visible} style={{ flex: 1, justifyContent: 'center', height: '100%' }}>
            <TouchableOpacity onPress={() => props.setShowDetailView(false)} style={styles.Container}>
                <View style={styles.MidContainer}>
                    <View style={styles.iconContainer} >
                        <SvgUri width="100%" height="100%" uri={props.icon} />
                    </View>
                    <Text style={[styles.Text1, { paddingTop: 5 }]} > TRANSACTION DETAILS</Text>
                    <Text style={styles.Text1} > _______</Text>
                    <View style={{ paddingTop: 10 }}>
                        {displayContent('Name :', props.name)}
                        {displayContent('catagory :', props.category)}
                        {displayContent('account no :', 'xxxxxxxxxxx123')}
                        {displayContent('carbon footprint :', props.carbon_footprint)}
                        {displayContent('brand partner :', props.brand_partner ? 'Yes' : 'No')}
                        {displayContent('Fees :', props.fees)}
                        {displayContent('currency :', props.currency)}
                    </View>
                    {displayBoldContent('status :', props.status)}
                    {displayBoldContent('date :', props.date + '/' + props.time)}
                    {displayBoldContent('transaction type :', props.type, false)}
                    {displayBoldContent('amount :', GetCurrency(props.currency) + ' ' + props.amount + '.00/--', false, props.status == 'completed' ? 'green' : 'red', 20)}
                </View>
                <View style={[{ backgroundColor: 'white', height: 5, width: '80%', shadowRadius: 15, marginHorizontal: '10%', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: '1%', }]} >
                    {[...Array(20)].map((component, index) => (<View key={index} style={{ backgroundColor: '#242424', shadowRadius: 15, width: 10, height: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} ></View>))}
                </View>
            </TouchableOpacity>


        </Modal>
    )
}

export default LongCard;

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flex: 1,
        paddingHorizontal: '3%',
        paddingVertical: '10%',
        backgroundColor: "#000000ca",

    },

    MidContainer: {
        backgroundColor: 'white',
        width: '80%',
        margin: '10%',
        paddingBottom: 40,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10 },
        elevation: 3,
        marginBottom: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    iconContainer: {
        height: 100,
        width: '100%',
        paddingTop: 15,
    },

    Text1: {
        color: darkShadeColor1,
        alignSelf: 'center',
        fontSize: 15
    },
    Text2: {
        color: whiteShadeColor2,
        fontWeight: 'bold',
        fontSize: 13,
    },

});