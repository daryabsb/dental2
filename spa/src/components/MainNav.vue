<template>
  <header class="w-full text-sm">Main Nav</header>
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
      <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m0 list-none">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="h-ful ml-9 first:ml-0"
            data-test="main-nav-list-item"
          >
            <a :href="item.url" class="flex items-center h-full py-2 5">{{
              item.title
            }}</a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center h-full ml-auto">
        <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
        <action-button
          v-else
          text="Sign in"
          data-test="login-button"
          @click="loginUser"
        ></action-button>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "ARON",
      isLoggedIn: false,
      url: "https://careers.google.com",
      menuItems: [
        {
          id: 1,
          title: "Teams",
          url: "https://careers.google.com",
        },
        {
          id: 2,
          title: "Locations",
          url: "https://careers.google.com",
        },
        {
          id: 3,
          title: "Life at ARON",
          url: "https://careers.google.com",
        },
        {
          id: 4,
          title: "How we hire",
          url: "https://careers.google.com",
        },
        { id: 5, title: "Students", url: "https://careers.google.com" },
        { id: 6, title: "Jobs", url: "https://careers.google.com" },
      ],
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
