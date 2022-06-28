import axios from 'axios';
const host = 'https://raw.githubusercontent.com/nisargdongare/ListDesign/main/data.json';

export const useGetClientDetails = async () => {
    let link = `${host}`;
    console.log("Calling... axios");
    return await axios.get(link)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((e) => { console.log(e.message); return false; });
}