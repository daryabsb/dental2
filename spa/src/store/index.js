import { createStore } from "vuex";

import getJobs from "@/api/getJobs";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
export const MAX_JOBS = "MAX_JOBS";
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
            context.commit(RECEIVE_JOBS, jobListings);
            // commit(MAX_JOBS, res.length);

        } catch (error) {
            console.log("from fetch job error", error)
        }
    },

};

const store = createStore({
    state,
    mutations,
    actions,
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