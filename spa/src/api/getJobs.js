import axios from "axios";
const getJobs = async() => {
    const baseUrl = process.env.VUE_APP_API_URL;
    try {
        const response = await axios.get(`${baseUrl}/jobs/`);
        return response.data;
    } catch (err) {
        console.log("from getJob Error", err);
    }

};

export default getJobs;