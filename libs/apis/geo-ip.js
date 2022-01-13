import axios from "axios";

const getGeoIP = async ({ ip, domain }) => {
    const {data} = await axios.get('/api/geo-ip', {
        params: {
            ip,
            domain,
        }
    });
    return data;
}

export {
    getGeoIP
};
