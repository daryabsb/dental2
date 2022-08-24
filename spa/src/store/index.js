import { createStore } from "vuex";

import state from "@/store/state";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

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