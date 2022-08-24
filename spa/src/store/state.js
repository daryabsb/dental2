const state = () => {
    return {
        isLoggedIn: false,
        jobs: [],
        maxJobs: 0,
        selectedOrganizations: [],
        selectedJobTypes: [],
        filteredJobs: [],
    };
};

// console.log(typeof(state))

export default state;