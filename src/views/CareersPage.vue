<template>
  <div>
    <div class="banner">
      <img src="@/assets/collaboration.jpg" alt="Company Banner">
      <div class="banner-text">
        <h1>Join Our Team</h1>
        <p>Help Shape the Future of Gaming</p>
      </div>
    </div>
    <div class="careers-page">
      <div class="careers-content">
        <section class="intro-section">
          <h2>Work With Us</h2>
          <p>At Smash Games, we're looking for passionate individuals who want to push the boundaries of what's possible in gaming. Join our team of innovators and help create the next generation of immersive experiences.</p>
        </section>

        <section class="positions-section">
          <h2>Open Positions</h2>
          <div class="positions-grid">
            <div class="position-card">
              <h3>Senior Game Developer</h3>
              <p>Create engaging gameplay mechanics and systems using Lua/Roblox</p>
              <ul>
                <li>5+ years game development experience</li>
                <li>Strong Lua programming skills</li>
                <li>Experience with Roblox Studio</li>
              </ul>
              <router-link to="/contact" class="apply-button">Apply Now</router-link>
            </div>

            <div class="position-card">
              <h3>3D Artist</h3>
              <p>Design and create stunning 3D assets and environments</p>
              <ul>
                <li>3+ years 3D modeling experience</li>
                <li>Proficiency in Blender/Maya</li>
                <li>Strong artistic vision</li>
              </ul>
              <router-link to="/contact" class="apply-button">Apply Now</router-link>
            </div>

            <div class="position-card">
              <h3>Game Designer</h3>
              <p>Design compelling game mechanics and player experiences</p>
              <ul>
                <li>3+ years game design experience</li>
                <li>Strong understanding of player psychology</li>
                <li>Experience with Roblox games</li>
              </ul>
              <router-link to="/contact" class="apply-button">Apply Now</router-link>
            </div>
          </div>
        </section>

        <section class="benefits-section">
          <h2>Benefits</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <h3>Competitive Salary</h3>
              <p>We offer industry-leading compensation packages</p>
            </div>
            <div class="benefit-item">
              <h3>Remote Work</h3>
              <p>Work from anywhere in the world</p>
            </div>
            <div class="benefit-item">
              <h3>Learning Budget</h3>
              <p>Annual budget for courses and conferences</p>
            </div>
            <div class="benefit-item">
              <h3>Health Benefits</h3>
              <p>Comprehensive health and wellness coverage</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CareersPage'
});
</script>

<style scoped>
.careers-page {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Kanit", sans-serif;
}

.banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  width: 100%;
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
  background-color: rgba(0, 0, 0, 0.5);
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

.banner-text h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.banner-text p {
  font-size: 1.5rem;
}

.careers-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.intro-section {
  text-align: center;
  margin-bottom: 4rem;
}

.intro-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.intro-section p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.position-card {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.position-card:hover {
  transform: translateY(-5px);
}

.position-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.position-card ul {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
}

.position-card li {
  margin-bottom: 0.5rem;
}

.apply-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.apply-button:hover {
  background-color: #0056b3;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.benefit-item {
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.benefit-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 4rem;
}

section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .banner-text h1 {
    font-size: 2.5rem;
  }

  .banner-text p {
    font-size: 1.2rem;
  }

  .careers-content {
    padding: 2rem 1rem;
  }
}
</style>
