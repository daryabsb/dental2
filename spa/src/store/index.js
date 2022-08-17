import { createStore } from "vuex";

export const state = () => {
    return {
        isLoggedIn: false
    };
};

export const mutations = {
    LOGIN_USER(state) {
        state.isLoggedIn = !state.isLoggedIn;
    },
};

const store = createStore({
    state,
    mutations,
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