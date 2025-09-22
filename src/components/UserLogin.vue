<script setup>
import { computed, ref } from "vue";

const emit = defineEmits(["submitted"]);
const isLoginMode = ref(false);

const name = ref("");
const pswrd = ref("");
const email = ref("");

const loginEmail = ref("");
const loginPassword = ref("");
const loginError = ref("");

const nameError = ref("");
const emailError = ref("");
const pswrdError = ref("");

// ---- VALIDACIONES ----
function validateName() {
  const v = (name.value || "").trim();
  if (!v) return (nameError.value = "El nombre es obligatorio"), false;
  if (v.length < 2 || v.length > 40)
    return (nameError.value = "Debe tener entre 2 y 40 caracteres"), false;
  if (/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s']/u.test(v))
    return (nameError.value = "Sólo letras y espacios"), false;
  nameError.value = "";
  return true;
}

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
  if (v.length < 8) return (pswrdError.value = "Mínimo 8 caracteres"), false;
  if (!/[A-Za-z]/.test(v) || !/\d/.test(v))
    return (pswrdError.value = "Debe incluir letras y números"), false;
  if (/\s/.test(v)) return (pswrdError.value = "Sin espacios"), false;
  pswrdError.value = "";
  return true;
}

function validateAll() {
  return validateName() && validateEmail() && validatePassword();
}

const isFormValid = computed(() => {
  return (
    !nameError.value &&
    !emailError.value &&
    !pswrdError.value &&
    !!name.value &&
    !!email.value &&
    !!pswrd.value
  );
});

// ---- FLUJOS ----
function handleSubmit() {
  name.value = (name.value || "").trim();
  email.value = (email.value || "").trim().toLowerCase();

  if (!validateAll()) return;

  let storedUsers = [];
  try {
    storedUsers = JSON.parse(localStorage.getItem("auth:users")) || [];
  } catch {
    storedUsers = [];
  }

  storedUsers = storedUsers.filter((u) => typeof u?.email === "string");

  const existingUser = storedUsers.find(
    (u) => u.email.toLowerCase() === email.value
  );

  if (existingUser) {
    isLoginMode.value = true;
    loginError.value =
      "El email ya está registrado, por favor ingresa tu contraseña.";
    loginEmail.value = email.value;

    return;
  }

  emit("submitted", {
    name: name.value,
    email: email.value,
    pswrd: pswrd.value,
  });
}

function handleLogin() {
  loginError.value = "";

  const enteredEmail = (loginEmail.value || "").trim().toLowerCase();
  const enteredPassword = loginPassword.value || "";

  if (!enteredEmail) {
    loginError.value = "El email es obligatorio";
    return;
  }
  if (!enteredPassword) {
    loginError.value = "La contraseña es obligatoria";
    return;
  }

  let storedUsers = [];
  try {
    storedUsers = JSON.parse(localStorage.getItem("auth:users")) || [];
  } catch {
    storedUsers = [];
  }

  storedUsers = storedUsers.filter(
    (u) => typeof u?.email === "string" && typeof u?.pswrd === "string"
  );

  const matchedUser = storedUsers.find(
    (u) => u.email.toLowerCase() === enteredEmail && u.pswrd === enteredPassword
  );

  if (!matchedUser) {
    loginError.value = "Email o contraseña incorrectos";
    return;
  }

  localStorage.setItem("auth:user", JSON.stringify(matchedUser));
  emit("submitted", matchedUser);
}

function switchToRegister() {
  isLoginMode.value = false;
}
</script>

<template>
  <form v-if="!isLoginMode" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label class="form-label custom-label">Nombre</label>
      <input
        id="nameInput"
        type="text"
        v-model.trim="name"
        @input="validateName"
        :class="['form-control', { 'is-invalid': nameError }]"
        required
      />
      <div class="invalid-feedback d-block" v-if="nameError">
        {{ nameError }}
      </div>
    </div>
    <div class="mb-3">
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
    <div class="mb-3">
      <label class="form-label custom-label">Contraseña</label>
      <input
        id="pswrdInput"
        type="password"
        v-model="pswrd"
        @input="validatePassword"
        :class="['form-control', { 'is-invalid': pswrdError }]"
        minlength="8"
        required
      />
      <div class="form-text">Mín. 8 caracteres, con letras y números.</div>
      <div class="invalid-feedback d-block" v-if="pswrdError">
        {{ pswrdError }}
      </div>
    </div>

    <div id="emailHelp" class="form-text pb-4">
      Nunca compartiremos tus datos con terceros.
    </div>

    <div>
      <button
        type="button"
        class="btn custom-btn__link mx-2"
        @click="isLoginMode = true"
      >
        Ya tengo una cuenta
      </button>
      <button
        type="submit"
        class="btn custom-btn mx-2"
        :disabled="!isFormValid"
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
    <div class="invalid-feedback d-block" v-if="loginError">
      {{ loginError }}
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
