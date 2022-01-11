import React from "react";
import Tracker from "../../components/Tracker";
import data from '../../data/data';

const TrackerContainer = () => {
    return (
        <Tracker ip={data.ip}
                 location={`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
                 timezone={`UTC ${data.location.timezone}`}
                 isp={data.isp}
                 lat={data.location.lat}
                 lng={data.location.lng}
        />
    );
};

export default TrackerContainer;
