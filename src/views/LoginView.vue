<script setup>
import UserLogin from "@/components/UserLogin.vue";
// import { useAuth } from "@/composables/useAuth.js"; // No longer needed here
// import { useRouter } from "vue-router"; // No longer needed here

// const { login } = useAuth(); // No longer needed here
// const router = useRouter(); // No longer needed here

// function onSubmitted(payload) { // No longer needed here
//   login(payload);
//   router.push("/favorites");
// }
</script>

<template>
  <section class="custom-container">
    <UserLogin class="userLogin-container" />
  </section>
</template>

<style>
.custom-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
}

.userLogin-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  padding: 2rem;
  border: 1px solid rgb(141, 178, 147);
  border-radius: 8px;
}
</style>
