import axios from "axios";
const filterJobs = async(payload) => {

    const baseUrl = `${process.env.VUE_APP_API_URL}/jobs/`;
    let orgKeyword, jobTypeKeyword, url;
    if (payload != undefined) {
        orgKeyword = payload.organization === undefined ? "" : `organization=${payload.organization}`
        jobTypeKeyword = payload.jobType === undefined ? "" : `job-type=${payload.jobType}`
        let urlKeywords = `?${orgKeyword}&${jobTypeKeyword}`;
        url = `${baseUrl}${urlKeywords}`
    } else {
        url = baseUrl;
    }


    try {

        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log("from filterJob Error", err);
    }
};

export default filterJobs;