<template>
    <div class="scroll-container">
      <v-card
        v-for="(card, index) in cards"
        :key="index"
        class="card_style"
      >
        <v-card-title class="justify-center">
          <v-avatar size="80">
            <img :src="card.image" alt="Profile" />
          </v-avatar>
        </v-card-title>
        <v-card-subtitle class="text-center font-weight-bold mt-5">
          {{ card.title }}
        </v-card-subtitle>
        <v-card-text class="text-center">
          {{ card.description }}
        </v-card-text>
        <v-card-text class="text-center">
          <strong>Date:</strong> {{ card.date }}
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-rating
            :value="card.rating"
            length="5"
            color="yellow darken-3"
            background-color="grey darken-1"
            dense
            readonly
          ></v-rating>
          <span class="ml-2">{{ card.rating }}/5</span>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Frontend Developer Interview 1',
            description: 'This card provides insights into the Frontend Developer Interview process number 1.',
            image: require('@/assets/profile.jpg'),
            date: 'May 13, 2025',
            rating: 3,
          },
          {
            title: 'Frontend Developer Interview 2',
            description: 'This card provides insights into the Frontend Developer Interview process number 2.',
            image: require('@/assets/profile.jpg'),
            date: 'May 14, 2025',
            rating: 5,
          },
          {
            title: 'Frontend Developer Interview 3',
            description: 'This card provides insights into the Frontend Developer Interview process number 3.',
            image: require('@/assets/profile.jpg'),
            date: 'May 14, 2025',
            rating: 5,
          },
          {
            title: 'Frontend Developer Interview 4',
            description: 'This card provides insights into the Frontend Developer Interview process number 4.',
            image: require('@/assets/profile.jpg'),
            date: 'May 14, 2025',
            rating: 5,
          },
        ],
      };
    },
  };
  </script>
  
  
  
  <style scoped>
  .scroll-container {
    display: flex;
    overflow-x: auto; /* 👈 Horizontal scrolling */
    gap: 16px;
    padding: 16px;
  
    /* 👇 Hide scrollbar - for WebKit (Chrome, Safari) */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  .scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  .card_style {
    width: 300px;
    min-height: 400px;
    border-radius: 12px;
    background-color: rgb(15, 15, 40);
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding: 20px;
    color: white;
  }
  </style>
  
  
  
  