<template>
  <div>
    <div class="pa-5 d-flex justify-center" style="margin-top: 110px">
      <v-card class="card_style">
        <div class="d-flex justify-center align-center mt-12">
          <v-avatar size="130">
            <v-icon size="150" :class="{ talking: isTalkingAI }">
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </div>
        <div class="text-center mt-2">AI Interviewer</div>
      </v-card>

      <v-card class="card_style">
        <div class="d-flex justify-center align-center mt-12">
          <v-avatar size="130">
            <img
              src="@/assets/profile.jpg"
              alt="Profile"
              :class="{ talking: isTalkingCandidate }"
            />
          </v-avatar>
        </div>
        <div class="text-center mt-2">You</div>
      </v-card>
    </div>
    <!-- Last message block -->
    <div class="text-center mt-4" v-if="lastMessage">
      <v-chip color="primary" text-color="white">
        ({{ lastMessage.sender }}): {{ lastMessage.text }}
      </v-chip>
    </div>

    <!-- Button block -->
    <div class="text-center mt-4">
      <v-btn
        :color="status === 'active' ? 'red' : 'green'"
        @click="toggleCall"
        rounded
        width="250px"
        style="text-transform: none"
      >
        {{ status === "active" ? "End" : "Call" }}
      </v-btn>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isTalkingAI: false,
      isTalkingCandidate: false,
      status: "inactive", // can be 'active', 'inactive', or 'finished'
      messages: [
        { sender: "AI Interviewer", text: "Hello, welcome to the interview!" },
        { sender: "You", text: "Thank you, I am ready." },
      ],
    };
  },
  methods: {
    toggleCall() {
      if (this.status === "active") {
        // End the call
        this.status = "finished";
      } else {
        // Start the call
        this.status = "active";
      }
    },
  },
  computed: {
    lastMessage() {
      if (this.messages.length === 0) return null;
      return this.messages[this.messages.length - 1];
    },
  },
};
</script>
  
  <style scoped>
.card_style {
  border-radius: 15px;
  border: 1px solid grey;
  width: 30%;
  height: 300px;
  margin-right: 20px;
}
@keyframes talkingAnimation {
  0% {
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.5);
    transform: scale(1.1);
  }
  100% {
    filter: brightness(1);
    transform: scale(1);
  }
}
.talking {
  animation: talkingAnimation 0.4s infinite;
}
.message-container {
  max-height: 200px;
  overflow-y: auto;
  margin: 20px auto;
  width: 60%;
  padding: 10px;
  border-radius: 10px;
}
.message {
  margin: 5px 0;
}
</style>
  