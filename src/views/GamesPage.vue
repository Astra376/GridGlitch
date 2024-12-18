<template>
    <div class="banner">
      <img src="@/assets/company-banner.png" alt="Company Banner">
      <div class="banner-text">
        <h1>Join the Smash Games Revolution</h1>
        <p>Unlock Your Gaming Potential</p>
      </div>
    </div>
  <div class="company-page">
    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-else-if="error" :message="error" />
    
    <div v-else class="company-content">
        
    <div class="about-section">
      <h2>About Us</h2>
      <p>Smash Games is a dynamic and fast-paced game publisher on Roblox known for creating engaging, high-energy experiences that captivate players. Specializing in games with quick reflexes, competitive gameplay, and vibrant design, Smash Games delivers action-packed fun that keeps users coming back for more.</p>
      <p>Their titles are celebrated for their creative mechanics, responsive controls, and immersive challenges, making them a standout in the Roblox gaming community.</p>
    </div>
    <div class="our-values">
      <h2>Our Values</h2>
      <div class="values-grid">
        <div class="value-item">
          <h3>Innovation</h3>
          <p>Pioneering new ideas and pushing boundaries.</p>
        </div>
        <div class="value-item">
          <h3>Community</h3>
          <p>Building a community that shares our passion.</p>
        </div>
        <div class="value-item">
          <h3>Excellence</h3>
          <p>Striving for excellence in every aspect.</p>
        </div>
        <div class="value-item">
          <h3>Fun</h3>
          <p>Creating experiences that bring joy and excitement.</p>
        </div>
      </div>
    </div>
    <div class="join-us">
      <router-link to="/careers" class="join-button">Join Us</router-link>
      <div class="space-under-button"></div> <!-- Added space under the join us button -->
    </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'CompanyPage',
  components: {
    LoadingSpinner,
    ErrorMessage,
  },

  setup() {
    const router = useRouter();
  }
}
</script>

<style scoped>
.company-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Kanit", sans-serif;
  text-align: center;margin: 0 20px; /* Added margin left and right */
}

.banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  margin-top: -80px;
}

.banner img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Added a semi-transparent background to make white text stand out */
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
}

.banner-text h1 {
  font-size: 2rem;
  font-weight: bold;
}

.about-section {
  margin-bottom: 40px; /* Increased margin-bottom for better spacing */
}

.our-values {
  margin-bottom: 40px; /* Increased margin-bottom for better spacing */
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-item {
  background-color: #007bff; /* Changed background color to blue */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.value-item h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.join-us {
  text-align: center;
}

.join-button {
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color var(--transition-speed);
}

.join-button:hover {
  background-color: var(--secondary-color);
}

.space-under-button {
  height: 40px; /* Added space under the join us button */
}
</style>
