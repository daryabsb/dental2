import axios from "axios";
const filterJobs = async (payload) => {
    // console.log("Payload is empy", payload);
    const baseUrl = `${process.env.VUE_APP_API_URL}/jobs/`;
    let inputKeyword, url;

    if (payload) {
        inputKeyword = `?input=${payload}`
        url = `${baseUrl}${inputKeyword}`
        // console.log(url);

        try {

            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            console.log("from filterJob Error", err);
        }

    } else {
        return [];
    }
};

export default filterJobs;