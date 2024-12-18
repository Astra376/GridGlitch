<template>
  <section class="featured-games">
    <h2 class="section-title animate-in">Our Games</h2>
    <div class="game-carousel">
      <swiper
        :modules="[Pagination, Navigation, Autoplay, EffectCoverflow]"
        :slides-per-view="3"
        :space-between="50"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :navigation="{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }"
        :loop="true"
      >
        <swiper-slide v-for="(game, index) in games" :key="game.id">
          <div class="game-card" :class="{ 'fade-in': isVisible }" @mousemove="(event) => handleMouseMove(event, index)" @mouseleave="() => handleMouseLeave(index)" ref="gameCard">
            <div class="game-image">
              <img :src="game.thumbnail" :alt="game.title" loading="lazy">
              <div class="game-overlay">
                <button class="play-btn" @click="playGame(game.id)" :onclick="game.link ? `window.open('${game.link}', '_blank')` : null">
                  <span class="btn-text">Play Now</span>
                  <span class="btn-icon">🎮</span>
                </button>
              </div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <p>{{ game.description }}</p>
              <div class="game-stats" v-if="game.released">
                <div class="stat">
                  <span>{{ formatNumber(game.playerCount) }}</span>
                  <span>Peak Players</span>
                </div>
                <div class="stat">
                  <span>{{ formatNumber(game.playSessions) }}</span>
                  <span>Play Sessions</span>
                </div>
                <div class="stat">
                  <span>{{ game.likePercentage }}%</span>
                  <span>Liked</span>
                </div>
              </div>
              <div class="coming-soon" v-else>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next animate-in"></div>
      <div class="swiper-button-prev animate-in"></div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default defineComponent({
  name: 'FeaturedGames',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const gameCards = ref([]);
    const isVisible = ref(false);

    const playGame = (gameId) => {
      console.log(`Playing game with ID: ${gameId}`);
      // Add game start logic here
    };

    const handleMouseMove = (event, index) => {
      const card = gameCards.value[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;

      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const maxRotation = 15;
      const scale = Math.min(distance / 100, 1);

      const limitedRotateX = Math.max(Math.min(rotateX * scale, maxRotation), -maxRotation);
      const limitedRotateY = Math.max(Math.min(rotateY * scale, maxRotation), -maxRotation);

      card.style.transform = `rotateX(${limitedRotateX}deg) rotateY(${limitedRotateY}deg)`;
    };

    const handleMouseLeave = (index) => {
      const card = gameCards.value[index];
      if (!card) return;

      card.style.transform = 'rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease-out';
    };

    const formatNumber = (number) => {
      if (number < 1000) return number;
      if (number < 1000000) return (number / 1000).toFixed(1) + 'K';
      if (number < 1000000000) return (number / 1000000).toFixed(1) + 'M';
      if (number < 1000000000000) return (number / 1000000000).toFixed(1) + 'B';
      return (number / 1000000000000).toFixed(1) + 'T';
    };

    onMounted(() => {
      gameCards.value = Array.from(document.querySelectorAll('.game-card'));
      setTimeout(() => {
        isVisible.value = true;
      }, 100);
    });

    return {
      Pagination,
      Navigation,
      Autoplay,
      EffectCoverflow,
      playGame,
      gameCards,
      handleMouseMove,
      handleMouseLeave,
      formatNumber,
      isVisible
    };
  },
});
</script>

<style scoped>
.featured-games {
  margin: 80px 0;
  position: relative;
  perspective: 1000px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.swiper-button-prev.animate-in {
  animation: slideInLeft 0.8s ease-out forwards;
  animation-delay: 0.3s;
}

.swiper-button-next.animate-in {
  animation: slideInRight 0.8s ease-out forwards;
  animation-delay: 0.3s;
}

.section-title.animate-in {
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 0.1s;
}

.game-card {
  opacity: 0;
  transform: translateY(30px);
}

.game-card.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.section-title {
  font-size: 5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #007bff, #00bfff, #ff00ff, #ff7f00);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 191, 255, 0.7);
}

.game-carousel {
  position: relative;
  padding: 80px 40px;
  overflow: hidden;
}

.swiper {
  overflow: visible;
}

.swiper-slide {
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

.game-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.3s;
  transform-style: preserve-3d;
  transform-origin: center center -150px;
}

.game-card:hover {
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.3);
}

.game-image {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 aspect ratio (1080/1920 = 0.5625) */
}

.game-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.game-card:hover .game-image img {
  transform: scale(1.2) rotate(3deg);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-btn {
  padding: 12px 24px;
  background-color: #ffffff;
  color: #0a0a0a;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 120px;
}

.play-btn .btn-text {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.play-btn .btn-icon {
  position: absolute;
  right: 24px;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

.play-btn:hover {
  background-color: #32CD32;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
  transform: scale(1.05);
}

.play-btn:hover .btn-text {
  transform: translateX(-10px);
}

.play-btn:hover .btn-icon {
  opacity: 1;
  transform: translateX(10px);
}

.game-info {
  padding: 20px;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.game-card:hover .game-info {
  transform: translateY(-5px);
}

.game-info h3 {
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #007bff;
  transition: color 0.3s ease;
}

.game-card:hover .game-info h3 {
  color: #0056b3;
}

.game-info p {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 15px;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-info p {
  opacity: 1;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-stats {
  opacity: 1;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.game-stats i {
  margin-right: 5px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat span:first-child {
  font-size: 1.4rem;
  font-weight: bold;
}

.stat span:last-child {
  font-size: 0.9rem;
  color: #999;
}

.coming-soon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #999;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px 30px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #0056b3;
  transform: scale(1.2);
  text-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
}

.swiper-pagination-bullet {
  background-color: #007bff;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.swiper-pagination-bullet:hover,
.swiper-pagination-bullet-active {
  background-color: #0056b3;
  transform: scale(1.5);
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3.5rem;
  }

  .game-info h3 {
    font-size: 1.4rem;
  }

  .game-info p {
    font-size: 0.9rem;
  }
}
</style>