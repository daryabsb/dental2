import { createStore } from "vuex";

import getJobs from "@/api/getJobs";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
export const MAX_JOBS = "MAX_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";


export const state = () => {
    return {
        isLoggedIn: false,
        jobs: [],
        maxJobs: 0,
    };
};

export const mutations = {
    [LOGIN_USER](state) {
        state.isLoggedIn = !state.isLoggedIn;
    },
    [RECEIVE_JOBS](state, payload) {
        state.jobs = payload;
    },
    [MAX_JOBS](state, payload) {
        state.maxJobs = payload;
    },

}

export const actions = {
    [FETCH_JOBS]: async(context) => {
        try {
            const jobListings = await getJobs();
            await context.commit(RECEIVE_JOBS, jobListings);
            await context.commit(MAX_JOBS, jobListings.length);

        } catch (error) {
            console.log("from fetch job error", error)
        }
    },

};
export const getters = {
    [UNIQUE_ORGANIZATIONS](state) {
        const uniqueOrganizations = new Set();
        state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
        return uniqueOrganizations;
    }
};

const store = createStore({
    state,
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== "production",
});

// console.log(store.state.isLoggedIn);
// store.commit("LOGIN_USER");
// console.log(store.state.isLoggedIn);

export default store;




// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })