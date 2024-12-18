<template>
  <section class="about-section" ref="sectionRef" :class="{ 'visible': isVisible }">
    <h2 class="section-title">Creating Incredible.</h2>
    <p class="section-description">Our mission is to create the best games on Roblox.</p>
    <div class="features">
      <div class="feature" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon" :class="feature.iconClass">
          <img :src="feature.icon" alt="Feature Icon" style="width: 60%; height: auto;" />
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>
    <div class="cta-container">
      <button class="cta-button primary" @click="goToCompany">Company Info</button>
      <button class="cta-button secondary" @click="goToCareers">Join Us</button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

import createIcon from '@/assets/create.png';
import learnIcon from '@/assets/learn.png';
import repeatIcon from '@/assets/repeat.png';

export default defineComponent({
  name: 'AboutSection',
  setup() {
    const features = ref([
      {
        title: 'Publish',
        description: 'We move fast. Every hour of everyday must be harnessed to its full potential. We work 24/7, publishing faster than any of our competitors.',
        icon: createIcon,
        iconClass: 'create-icon'
      },
      {
        title: 'Learn',
        description: "Sometimes things workout, sometimes they don't. We don't care. Every failure, every succcess, allows us to gather more data and improve our workflow and games.",
        icon: learnIcon,
        iconClass: 'play-icon'
      },
      {
        title: 'Repeat',
        description: 'We publish fast. What takes other studios months takes us weeks. Every game we publish must be better than the last.',
        icon: repeatIcon,
        iconClass: 'innovate-icon'
      }
    ]);

    const sectionRef = ref(null);
    const isVisible = ref(false);

    const goToCompany = () => {
      window.location.href = '/company';
    };

    const goToCareers = () => {
      window.location.href = '/careers';
    };

    onMounted(() => {
      const observer = new IntersectionObserver(([entry]) => {
        isVisible.value = entry.isIntersecting;
      }, { threshold: 0.1 });

      if (sectionRef.value) {
        observer.observe(sectionRef.value);
      }

      return () => {
        if (sectionRef.value) {
          observer.unobserve(sectionRef.value);
        }
      };
    });

    return {
      features,
      goToCompany,
      goToCareers,
      sectionRef,
      isVisible
    };
  }
});
</script>

<style scoped>
.about-section {
  padding: 120px 0;
  color: #ffffff;
  position: relative;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.about-section.visible {
  opacity: 1;
  transform: translateY(0);
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

.section-description {
  font-size: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 5rem;
  line-height: 1.8;
  color: #e0e0ff;
  text-shadow: 0 0 15px rgba(0, 191, 255, 0.5);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  margin-bottom: 5rem;
}

.feature {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  box-shadow: 0 15px 50px rgba(0, 191, 255, 0.15);
  transition: all 0.5s ease;
  backdrop-filter: blur(10px);
}

.feature:hover {
  transform: translateY(-20px);
  box-shadow: 0 25px 80px rgba(0, 191, 255, 0.3);
}

.feature-icon {
  font-size: 4rem;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 2.5rem;
  transition: all 0.5s ease;
}

.create-icon { background: linear-gradient(135deg, #007bff, #00bfff); }
.play-icon { background: linear-gradient(135deg, #007bff, #00bfff); }
.innovate-icon { background: linear-gradient(135deg, #007bff, #00bfff); }

.feature-title {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(0, 191, 255, 0.7);
}

.feature-description {
  font-size: 1.2rem;
  color: #d1d1f5;
  line-height: 1.8;
}

.cta-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 6rem;
}

.cta-button {
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-button.primary {
  color: #1a1a2e;
  background: linear-gradient(45deg, #007bff, #00bfff);
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.5);
}

.cta-button.secondary {
  color: #ffffff;
  background: transparent;
  border: 3px solid #007bff;
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 191, 255, 0.7);
}

.cta-button.secondary:hover {
  background: rgba(0, 191, 255, 0.2);
  box-shadow: 0 15px 40px rgba(0, 191, 255, 0.5);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3.5rem;
  }

  .section-description {
    font-size: 1.2rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .cta-container {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>