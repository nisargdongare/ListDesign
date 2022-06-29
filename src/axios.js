import axios from 'axios';
const host = 'https://raw.githubusercontent.com/nisargdongare/ListDesign/main/data.json';

export const useGetClientDetails = async () => {
    return await axios.get(host)
        .then((res) => { return res.data; })
        .catch((e) => { console.log(e.message); return false; });
}