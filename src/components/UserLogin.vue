<script setup>
import { computed, ref } from "vue";
import { useAuth } from "@/composables/useAuth.js"; // Import useAuth
import { useRouter } from "vue-router"; // Import useRouter

const emit = defineEmits(["submitted"]);
const isLoginMode = ref(false);

const { login, register, authError } = useAuth(); // Get Firebase functions and error
const router = useRouter();

const pswrd = ref("");
const email = ref("");

const loginEmail = ref("");
const loginPassword = ref("");

const emailError = ref("");
const pswrdError = ref("");

// ---- VALIDACIONES ----
function validateEmail() {
  const v = (email.value || "").trim().toLowerCase();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!v) return (emailError.value = "El email es obligatorio"), false;
  if (!re.test(v))
    return (emailError.value = "Formato de email inválido"), false;
  emailError.value = "";
  return true;
}

function validatePassword() {
  const v = pswrd.value || "";
  if (!v) return (pswrdError.value = "La contraseña es obligatoria"), false;
  if (v.length < 6) return (pswrdError.value = "Mínimo 6 caracteres"), false; // Firebase min password length is 6
  // Firebase doesn't enforce character types, but we can keep it for client-side UX
  if (!/[A-Za-z]/.test(v) || !/\d/.test(v))
    return (pswrdError.value = "Debe incluir letras y números"), false;
  if (/\s/.test(v)) return (pswrdError.value = "Sin espacios"), false;
  pswrdError.value = "";
  return true;
}

function validateAllRegister() {
  return validateEmail() && validatePassword();
}

const isRegisterFormValid = computed(() => {
  return (
    !emailError.value &&
    !pswrdError.value &&
    !!email.value &&
    !!pswrd.value
  );
});

// ---- FLUJOS ----
async function handleSubmit() {
  email.value = (email.value || "").trim().toLowerCase();

  if (!validateAllRegister()) return;

  try {
    await register({ email: email.value, password: pswrd.value });
    router.push("/favorites"); // Redirect on successful registration
  } catch (error) {
    // authError.value is already set by useAuth
    console.error("Registration failed:", error);
  }
}

async function handleLogin() {
  const enteredEmail = (loginEmail.value || "").trim().toLowerCase();
  const enteredPassword = loginPassword.value || "";

  if (!enteredEmail) {
    authError.value = "El email es obligatorio"; // Set error directly to authError
    return;
  }
  if (!enteredPassword) {
    authError.value = "La contraseña es obligatoria"; // Set error directly to authError
    return;
  }

  try {
    await login({ email: enteredEmail, password: enteredPassword });
    router.push("/favorites"); // Redirect on successful login
  } catch (error) {
    // authError.value is already set by useAuth
    console.error("Login failed:", error);
  }
}

function switchToRegister() {
  isLoginMode.value = false;
  authError.value = null; // Clear error when switching forms
}

function switchToLogin() {
  isLoginMode.value = true;
  authError.value = null; // Clear error when switching forms
}
</script>

<template>
  <form v-if="!isLoginMode" @submit.prevent="handleSubmit">
    <div class="mb-3 w-75">
      <label class="form-label custom-label">Email</label>
      <input
        id="emailInput"
        type="email"
        v-model.trim="email"
        @input="validateEmail"
        :class="['form-control', { 'is-invalid': emailError }]"
        required
      />
      <div class="invalid-feedback d-block" v-if="emailError">
        {{ emailError }}
      </div>
    </div>
    <div class="mb-3 w-75">
      <label class="form-label custom-label">Contraseña</label>
      <input
        id="pswrdInput"
        type="password"
        v-model="pswrd"
        @input="validatePassword"
        :class="['form-control', { 'is-invalid': pswrdError }]"
        minlength="6"
        required
      />
      <div class="form-text">Mín. 6 caracteres, con letras y números.</div>
      <div class="invalid-feedback d-block" v-if="pswrdError">
        {{ pswrdError }}
      </div>
    </div>

    <div id="emailHelp" class="form-text pb-4">
      Nunca compartiremos tus datos con terceros.
    </div>

    <div class="invalid-feedback d-block" v-if="authError">
      {{ authError }}
    </div>

    <div>
      <button
        type="button"
        class="btn custom-btn__link mx-2"
        @click="switchToLogin"
      >
        Ya tengo una cuenta
      </button>
      <button
        type="submit"
        class="btn custom-btn mx-2"
        :disabled="!isRegisterFormValid"
      >
        Registrar
      </button>
    </div>
  </form>

  <form v-else @submit.prevent="handleLogin" class="login-form">
    <div class="mb-3">
      <label class="form-label custom-label"> Email</label>
      <input
        id="loginEmailInput"
        type="email"
        v-model.trim="loginEmail"
        class="form-control"
        autocomplete="username"
        required
      />
    </div>
    <div class="mb-3">
      <label class="form-label custom-label">Contraseña</label>
      <input
        id="loginPasswordInput"
        type="password"
        v-model="loginPassword"
        class="form-control"
        autocomplete="current-password"
        required
      />
    </div>
    <div class="invalid-feedback d-block" v-if="authError">
      {{ authError }}
    </div>
    <div class="mb-3">
      <button
        type="button"
        class="btn custom-btn__link mx-2"
        @click="switchToRegister"
      >
        Registrarme
      </button>
      <button type="submit" class="btn custom-btn mx-2">Iniciar Sesión</button>
    </div>
  </form>
</template>

<style scoped>
.custom-label {
  color: rgb(3, 50, 10);
}

.custom-btn {
  background-color: rgb(3, 50, 10);
  color: rgb(210, 238, 214);
}

.custom-btn:hover {
  background-color: rgb(136, 176, 5);
}

.custom-btn__link {
  color: rgb(3, 50, 10);
  text-decoration: underline;
}

.custom-btn__link:hover {
  color: rgb(136, 176, 5);
}
</style>
