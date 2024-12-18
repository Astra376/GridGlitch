<template>
  <section id="home">
    <div class="home-page" ref="homePageRef" :class="{ 'visible': isVisible }">
      <div class="content">
        <img src="@/assets/logo 2.png" alt="Company Logo" class="logo" />
        <p class="tagline">Breaking barriers and smashing expectations.</p>
        <div class="cta-container">
          <router-link to="/careers" class="cta-button primary" :class="{ 'pulse': isPulsing }">Join Us</router-link>
          <router-link to="/games" class="cta-button secondary">Explore Games</router-link>
        </div>
        <div class="gap-before-featured-games"></div>
        <section id="featured-games" class="featured-games-section">
          <div class="gap-before-featured-games" style="height: 20px;"></div>
          <FeaturedGames :games="featuredGames" />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </div>
      <ParticlesBackground ref="particlesContainer" />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import FeaturedGames from '@/components/FeaturedGames.vue';
import AboutSection from '@/components/AboutSection.vue';
import ParticlesBackground from '@/components/ParticlesBackground.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    FeaturedGames,
    AboutSection,
    ParticlesBackground,
  },
  setup() {
    const router = useRouter();

    const featuredGames = ref([
      { id: 1, title: 'Robot Tycoon', description: 'Build and manage your own robot empire', thumbnail: 'src/assets/RobotTycoon.webp', playerCount: 5300, playSessions: 38000000, likePercentage: 71, released: true, link: 'https://www.roblox.com/games/10828925984/Robot-Tycoon' },
      { id: 2, title: 'Solar System Adventure', description: 'Explore the mysteries of space', thumbnail: 'src/assets/SolarSystemAdventure.webp', playerCount: 150, playSessions: 2800000, likePercentage: 46, released: true, link: 'https://www.roblox.com/games/5376454753/Solar-System-Adventure' },
      { id: 3, title: 'Escape Burts Burger Shop!', description: 'Can you escape the infamous burger shop?', thumbnail: 'src/assets/EscapeBurtsBurgerShop.webp', playerCount: 100, playSessions: 5300, likePercentage: 33, released: true, link: 'https://www.roblox.com/games/13442533661/Escape-Burts-Burger-Shop-SCARY-OBBY' },
      { id: 4, title: 'Mars Warfare Tycoon', description: 'Dominate the red planet', thumbnail: 'src/assets/MarsWarefareTycoon.webp', playerCount: 350, playSessions: 15033, likePercentage: 52, released: true, link: 'https://www.roblox.com/games/15024121792/Mars-Tycoon' },
      { id: 5, title: 'Animal World 🐺', description: 'Survive and explore the forest', thumbnail: 'src/assets/AnimalWorld.png', playerCount: 400, playSessions: 339719, likePercentage: 29, released: true, link: 'https://www.roblox.com/games/17779125812/Animal-World' },
      { id: 6, title: 'Chaos Playground', description: 'Unleash mayhem in this sandbox world', thumbnail: 'src/assets/ChaosPlayground.webp', playerCount: 350, playSessions: 9900, likePercentage: 42, released: true, link: 'https://www.roblox.com/games/18502373299/Chaos-Playground' },
      { id: 7, title: 'Billionaire Empire Tycoon', description: 'Build your business empire', thumbnail: 'src/assets/BillionaireEmpireTycoon.webp', playerCount: 200, playSessions: 177252, likePercentage: 81, released: true, link: 'https://www.roblox.com/games/8314692489/Billionaire-Empire-Tycoon' },
      { id: 8, title: 'My School', description: 'Create and manage your dream school', thumbnail: 'src/assets/ComingSoon.png', playerCount: 0, playSessions: 0, likePercentage: 0, released: false, link: '' },
      { id: 9, title: 'Space Station Tycoon', description: 'Build the ultimate space station', thumbnail: 'src/assets/ComingSoon.png', playerCount: 0, playSessions: 0, likePercentage: 0, released: false, link: '' },
      { id: 10, title: 'House Flipper', description: 'Buy, renovate and sell houses', thumbnail: 'src/assets/ComingSoon.png', playerCount: 0, playSessions: 0, likePercentage: 0, released: false, link: '' },
    ]);

    const homePageRef = ref(null);
    const isVisible = ref(false);
    const isPulsing = ref(false);

    const getRandomParticleStyle = () => {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      };
    };

    useIntersectionObserver(homePageRef, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true;
      }
    });

    let pulseInterval;
    onMounted(() => {
      pulseInterval = setInterval(() => {
        isPulsing.value = true;
        setTimeout(() => {
          isPulsing.value = false;
        }, 1000);
      }, 5000);

      console.log('HomePage Loaded');
    });

    onUnmounted(() => {
      if (pulseInterval) {
        clearInterval(pulseInterval);
      }
    });

    return { 
      featuredGames,
      homePageRef,
      isVisible,
      isPulsing,
      getRandomParticleStyle
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');

.home-page {
  position: relative;
  min-height: 100vh;
  color: #ffffff;
  overflow: hidden;
  font-family: "Kanit", sans-serif;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
}

.content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  text-align: center;
}

.logo {
  width: clamp(200px, 35%, 400px);
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7));
  animation: fadeInUp 1s ease 0.5s forwards, glow 2s ease-in-out infinite alternate;
  margin: auto;
  display: block;
  opacity: 0;
  transform: translateY(20px);
}

.tagline {
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-weight: 400;
  margin: 2rem auto;
  color: #ffffff;
  opacity: 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transform: translateY(20px);
  animation: fadeInUp 1s ease 0.7s forwards;
  max-width: 800px;
}

.cta-container {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 3rem, 4rem);
  margin-top: 6rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease 0.9s forwards;
  flex-wrap: wrap;
}

.cta-button {
  padding: clamp(1rem, 1.5rem, 2rem) clamp(2rem, 3rem, 4rem);
  font-size: clamp(1rem, 1.5rem, 2rem);
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-button.primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #ffffff;
}

.cta-button.secondary {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  backdrop-filter: blur(5px);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
}

.cta-button:active {
  transform: scale(0.95);
}

.cta-button.pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
}

.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle at center, rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 0));
  border-radius: 50%;
  animation: float 15s infinite linear;
  will-change: transform;
}

@keyframes float {
  0% { 
    transform: translate(0, 0) rotate(0deg); 
  }
  25% { 
    transform: translate(25px, -25px) rotate(90deg); 
  }
  50% { 
    transform: translate(50px, -50px) rotate(180deg); 
  }
  75% { 
    transform: translate(25px, -25px) rotate(270deg); 
  }
  100% { 
    transform: translate(0, 0) rotate(360deg); 
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7));
  }
  to {
    filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.9));
  }
}

.gap-before-featured-games {
  height: clamp(150px, 300px, 400px);
}

@media (max-width: 768px) {
  .content {
    padding: 60px 16px;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>