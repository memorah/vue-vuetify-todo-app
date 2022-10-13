<template>
  <div class="about pa-6">
    <h1>Profile {{ $store.state.appTitle }}</h1>
    Name: {{ $store.state.profile.name }}
    <profile-menu></profile-menu>
  </div>
</template>
<script>
export default {
  components: {
    "profile-menu": require("@/components/Todo/ProfileMenu.vue").default,
  },
};
</script>

ProfileMenu
