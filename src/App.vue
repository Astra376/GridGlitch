<template>
  <div id="app" ref="app" class="app dark-mode">
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Smash Games" class="logo-img" />
          <span class="logo-text">Smash Games</span>
        </router-link>
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span class="menu-icon"></span>
        </button>
        <nav class="nav" :class="{ 'nav-open': isMobileMenuOpen }">
          <router-link to="/#home" class="nav-link" @click="closeMobileMenu">Home</router-link>
          <router-link to="/#featured-games" class="nav-link no-underline" @click="closeMobileMenu">Games</router-link>
          <router-link to="/#about" class="nav-link no-underline" @click="closeMobileMenu">About</router-link>
          <router-link to="/company" class="nav-link" @click="closeMobileMenu">Company</router-link>
          <router-link to="/careers" class="nav-link" @click="closeMobileMenu">Careers</router-link>
          <div class="gap-before-contact"></div>
          <router-link to="/contact" class="nav-link standout no-underline" @click="closeMobileMenu">Contact</router-link>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="#" target="_blank" rel="noopener" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="https://www.roblox.com/groups/8338753/Smash-Games#!/about" target="_blank" rel="noopener" aria-label="Roblox"><img src="@/assets/roblox.png" alt="Roblox" /></a>
            <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
        <p class="copyright">&copy; 2024 Smash Games. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const app = ref(null);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
      if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
        document.body.style.overflow = '';
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', closeMobileMenu);
      window.addEventListener('click', (e) => {
        if (isMobileMenuOpen.value && !app.value.contains(e.target)) {
          closeMobileMenu();
        }
      });
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', closeMobileMenu);
    });

    return {
      app,
      isScrolled,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    };
  }
});
</script>

<style>
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
  --header-bg: rgba(44, 44, 44, 0.5);
  --footer-bg: #2c2c2c;
  --transition-speed: 0.3s;
  --logout-color: #dc3545;
  --border-radius: 8px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  padding: 0;
  font-family: "Kanit", sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color var(--transition-speed), color var(--transition-speed);
  background: linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a);
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--header-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all var(--transition-speed);
  width: 100%;
}

.header-scrolled {
  box-shadow: var(--box-shadow);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 100%;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-img {
  height: 2.5rem;
  width: auto;
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-color);
  transition: color var(--transition-speed);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-color);
  position: relative;
  transition: background-color var(--transition-speed);
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--text-color);
  transition: transform var(--transition-speed);
}

.menu-icon::before {
  transform: translateY(-8px);
}

.menu-icon::after {
  transform: translateY(8px);
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: all var(--transition-speed);
  position: relative;
  white-space: nowrap;
}

.nav-link:not(.standout)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transition: transform var(--transition-speed);
  transform-origin: center;
}

.nav-link:not(.standout):hover::after,
.nav-link:not(.standout).router-link-active:not(.no-underline)::after {
  transform: scaleX(1);
}

.standout {
  background-color: var(--primary-color);
  color: #ffffff;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
}

.standout:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.gap-before-contact {
  width: 2rem;
}

.main-content {
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-speed);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.footer {
  background-color: var(--footer-bg);
  color: var(--text-color);
  padding: 2rem 1rem;
  margin-top: auto;
  transition: background-color var(--transition-speed);
  width: 100%;
}

.footer-content {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-section {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  transition: color var(--transition-speed), transform var(--transition-speed);
}

.social-links a:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.copyright {
  margin: 0;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .header-content {
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background-color: var(--header-bg);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-speed);
    height: calc(100vh - 72px);
    overflow-y: auto;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .gap-before-contact {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.5rem;
  }

  .logo-img {
    height: 2rem;
  }

  .nav-link {
    width: 100%;
    text-align: center;
  }
}
</style>