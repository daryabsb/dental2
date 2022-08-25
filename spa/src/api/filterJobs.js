import axios from "axios";
const filterJobs = async (payload) => {

    const baseUrl = `${process.env.VUE_APP_API_URL}/jobs/`;
    let inputKeyword, url;

    if (payload === "") {
        url = baseUrl;
    } else {
        inputKeyword = `?input=${payload}`
        url = `${baseUrl}${inputKeyword}`
    }
    console.log(url);

    try {

        const response = await axios.get(url);

        return Array.from(response.data);
    } catch (err) {
        console.log("from filterJob Error", err);
    }
};

export default filterJobs;