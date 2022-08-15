<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="
        flex flex-nowrap
        h-full
        px-8
        mx-auto
        border-b border-solid border-brand-gray-1
      "
    >
      <router-link to="/" class="flex items-center h-full text-xl">{{
        company
      }}</router-link>
      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m0 list-none">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="h-ful ml-9 first:ml-0"
            data-test="main-nav-list-item"
          >
            <router-link :to="item.url" class="flex items-center h-full py-2 5">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center h-full ml-auto">
        <ProfileImage
          v-if="isLoggedIn"
          data-test="profile-image"
          @click="isLoggedIn = false"
        />
        <action-button
          v-else
          type="primary"
          text="Sign in"
          data-test="login-button"
          @click="loginUser"
        ></action-button>
      </div>
    </div>
    <sub-nav v-if="isLoggedIn" data-test="sub-nav"></sub-nav>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navs/ProfileImage.vue";
import SubNav from "@/components/navs/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "ARON",
      isLoggedIn: false,
      menuItems: [
        {
          id: 1,
          title: "Teams",
          url: "/",
        },
        {
          id: 2,
          title: "Locations",
          url: "/",
        },
        {
          id: 3,
          title: "Life at ARON",
          url: "/",
        },
        {
          id: 4,
          title: "How we hire",
          url: "/",
        },
        { id: 5, title: "Students", url: "/" },
        { id: 6, title: "My Test", url: "/mytest" },
        { id: 7, title: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
