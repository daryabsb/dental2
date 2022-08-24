import axios from "axios";
const filterJobs = async(payload) => {
    console.log("type of payload from filterJobs test: ", typeof(payload));
    console.log("payload from filterJobs test: ", payload);
    const baseUrl = `${process.env.VUE_APP_API_URL}/jobs/`;

    const orgKeyword = payload.organization ? `organization=${payload.organization}` : ""
    const jobTypeKeyword = payload.jobType ? `job-type=${payload.jobType}` : ""
    let urlKeywords = `?${orgKeyword}&${jobTypeKeyword}`;
    let url;
    url = `${baseUrl}${urlKeywords}`

    console.log(url);

    try {

        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log("from filterJob Error", err);
    }
};

export default filterJobs;