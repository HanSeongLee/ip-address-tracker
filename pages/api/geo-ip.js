import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const {ip: ipAddress, domain} = req.query;
        const {data} = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_IPIFY_API_KEY}`, {
            params: {
                ipAddress,
                domain,
            }
        });
        return res.status(200).json(data);
    }
    throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
    );
};
