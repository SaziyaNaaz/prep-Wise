<template>
  <div>
    <div class="auth-container">
      <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :color="snackbarColor"
        top
        centered
      >
        {{ snackbarText }}
      </v-snackbar>

      <v-card class="card_style">
        <div class="auth-container">
          <div>
            <div>
              <div class="heading pa-2 mt-8">
                <v-icon class="mr-1" size="28">mdi-chat-outline</v-icon>
                PrepWise
              </div>
            </div>
            <div style="font-size: medium; font-weight: 200; margin-left: 20px">
              Practice Job Interview with AI
            </div>
            <v-form ref="form">
              <div v-if="signIn">
                <v-text-field
                  label="Email"
                  v-model="email"
                  rounded
                  outlined
                  dense
                  class="mt-5"
                  :rules="emailRules"
                  style="width: 250px"
                ></v-text-field>

                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  rounded
                  outlined
                  dense
                  :rules="passwordRules"
                  style="width: 250px"
                ></v-text-field>
              </div>
              <div v-if="!signIn">
                <v-text-field
                  label="Name"
                  v-model="name"
                  rounded
                  outlined
                  dense
                  class="mt-5"
                  style="width: 250px"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="email"
                  rounded
                  outlined
                  dense
                  :rules="emailRules"
                  style="width: 250px"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  rounded
                  outlined
                  dense
                  :rules="passwordRules"
                  style="width: 250px"
                ></v-text-field>
              </div>
              <v-btn
                rounded
                block
                dense
                color="blue"
                style="text-transform: none"
                @click="submit"
                v-if="signIn"
                >Sign In</v-btn
              >
              <v-btn
                rounded
                block
                dense
                color="blue"
                style="text-transform: none"
                @click="submit"
                v-if="!signIn"
                >Create an Account</v-btn
              >
            </v-form>
            <div
              style="font-size: small; text-align: center; margin-top: 8px"
              v-if="signIn"
            >
              Don't Have an account?
              <span
                style="color: #3b3dcc; cursor: pointer; font-weight: bold"
                @click="toggleSignUp"
              >
                Sign Up
              </span>
            </div>
            <div
              style="font-size: small; text-align: center; margin-top: 8px"
              v-if="!signIn"
            >
              Have an account already?
              <span
                style="color: #3b3dcc; cursor: pointer; font-weight: bold"
                @click="toggleSignUp"
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { auth, db } from "@/firebase/client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  name: "Auth",
  data() {
    return {
      signIn: true,
      email: "",
      password: "",
      name: "",
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          /^.{8,}$/.test(v) || "Password must be at least 8 characters long",
      ],
    };
  },
  methods: {
    async submit() {
      if (!this.$refs.form.validate()) {
        this.showSnackbar("Please fix the errors 🚫", "error");
        return;
      }

      try {
        if (this.signIn) {
          // Sign In
          const userCredential = await signInWithEmailAndPassword(
            auth,
            this.email,
            this.password
          );
          console.log("Signed in:", userCredential.user);
          this.showSnackbar("Successfully signed in ✅", "success");
          this.$router.push('home')
        } else {
          // Sign Up
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            // this.name,
            this.email,
            this.password,
          );
          console.log("Account created:", userCredential.user);
          this.showSnackbar(
            "Account created successfully! Now please sign in.",
            "success"
          );
          // Switch to Sign In after successful signup
          this.signIn = true;
        }
      } catch (error) {
        console.error("Firebase error:", error.message);

        // Handle specific error: user-not-found
        if (this.signIn && error.code === "auth/user-not-found") {
          this.showSnackbar(
            "No account found. Please create an account 👤",
            "warning"
          );
          // Switch to Sign Up form
          this.signIn = false;
        } else if (error.code === "auth/wrong-password") {
          this.showSnackbar("Incorrect password 🚫", "error");
        } else if (error.code === "auth/email-already-in-use") {
          this.showSnackbar("This email is already registered 🚫", "error");
        } else {
          this.showSnackbar(error.message, "error");
        }
      }
    },
    toggleSignUp() {
      this.signIn = !this.signIn;
    },
    showSnackbar(message, color = "success") {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
};
</script>
<style scoped>
.card_style {
  height: 400px;
  width: 400px;
  border-radius: 12px;
  margin-top: 110px;
}
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading {
  font-weight: 500;
  font-size: 28px;
  line-height: 37px;
  letter-spacing: 0px;
  text-align: center;
}
</style>