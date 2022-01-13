import React, {useState} from "react";
import Tracker from "../../components/Tracker";
import defaultData from '../../data/data';
import axios from "axios";

const TrackerContainer = () => {
    const [data, setData] = useState(defaultData);

    const onSubmit = async (e) => {
        e.preventDefault();
        const address = e.target[0].value;
        console.log(address);
        const checkIP = /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
        if (checkIP.test(address)) {
            const {data} = await axios.get('/api/geo-ip', {
                params: {
                    ip: address,
                }
            });
            setData(data);
            return;
        }
        const checkDomain = /[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/g;
        if (checkDomain.test(address)) {
            const {data} = await axios.get('/api/geo-ip', {
                params: {
                    domain: address,
                }
            });
            setData(data);
            return;
        }
    };

    return (
        <Tracker ip={data.ip}
                 location={`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
                 timezone={`UTC ${data.location.timezone}`}
                 isp={data.isp}
                 lat={data.location.lat}
                 lng={data.location.lng}
                 onSubmit={onSubmit}
        />
    );
};

export default TrackerContainer;
