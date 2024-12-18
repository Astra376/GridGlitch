<template>
  <div>
    <div class="banner">
      <img src="@/assets/company-banner.png" alt="Company Banner">
      <div class="banner-text">
        <h1>About Our Company</h1>
        <p>Building the Future of Gaming</p>
      </div>
    </div>
    <div class="company-page">
      <div class="company-content">
        <section class="intro-section">
          <h2>Who We Are</h2>
          <p>Smash Games is a pioneering game development studio focused on creating innovative and immersive gaming experiences. Founded by passionate gamers, we strive to push the boundaries of what's possible in the gaming industry.</p>
        </section>

        <section class="mission-section">
          <h2>Our Mission</h2>
          <div class="positions-grid">
            <div class="position-card">
              <h3>Innovation</h3>
              <p>We're committed to developing groundbreaking gaming technologies and experiences</p>
              <ul>
                <li>Cutting-edge game development</li>
                <li>Advanced gaming technologies</li>
                <li>Creative gameplay mechanics</li>
              </ul>
            </div>

            <div class="position-card">
              <h3>Community</h3>
              <p>Building and nurturing an engaged gaming community</p>
              <ul>
                <li>Player-focused development</li>
                <li>Active community engagement</li>
                <li>Regular player events</li>
              </ul>
            </div>

            <div class="position-card">
              <h3>Quality</h3>
              <p>Delivering exceptional gaming experiences</p>
              <ul>
                <li>Rigorous quality standards</li>
                <li>Polished game mechanics</li>
                <li>Engaging storytelling</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="values-section">
          <h2>Our Values</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <h3>Creativity</h3>
              <p>Encouraging innovative ideas and unique solutions</p>
            </div>
            <div class="benefit-item">
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do</p>
            </div>
            <div class="benefit-item">
              <h3>Collaboration</h3>
              <p>Working together to achieve extraordinary results</p>
            </div>
            <div class="benefit-item">
              <h3>Player Focus</h3>
              <p>Putting our players at the heart of every decision</p>
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
    name: 'CompanyPage'
  });
  </script>
  
  <style scoped>
  .company-page {
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
  
  .company-content {
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
  
    .company-content {
      padding: 2rem 1rem;
    }
  }
  </style>