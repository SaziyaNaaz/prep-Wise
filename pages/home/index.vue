<template>
    <div class="outer-container">
      <v-card class="card_style">
        <div class="card-content">
          <div class="left-side">
            <div class="heading">
              Get Interview-Ready With AI-
            </div>
            <div class="heading"> Powered Practice & Feedback</div>
            <div class="mb-4" style="font-weight:200">
              Practice on real Interview questions & get instant Feedback
            </div>
            <v-btn color="#EBEBFA" rounded style="text-transform: none">
              <div style="color: black; letter-spacing: 0px">
                Start an Interview
              </div>
            </v-btn>
          </div>
          <div class="right-side">
            <img class="robot-img" src="~/assets/robot.png" alt="Robot" />
          </div>
        </div>
        <div class="heading_for_card">
            Your Interview :
          </div>
        <interviewCards />
        <div class="heading_for_card">
            Take an Interview :
          </div>
        <interviewCards />
      </v-card>
    </div>
  </template>
  
  <style scoped>
  .outer-container {
    display: flex;
    justify-content: center;
    min-height: 100%;
  }
  
  .card_style {
    width: 900px;
    padding: 24px;
    background-color: rgb(15, 15, 40);
  }
  
  /* Flex row inside the card */
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Left column (text + button) */
  .left-side {
    flex: 1;
    padding-right: 20px;
  }
  
  /* Right column (image) */
  .right-side {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .robot-img {
    max-width: 100%;
    height: auto;
    width: 300px;
  }
  .heading {
    font-size: 28px;
    font-weight: 700;
  }
  .heading_for_card {
    font-size: 22px;
    font-weight: 500;
  }
  </style>
  