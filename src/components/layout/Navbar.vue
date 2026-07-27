<template>
  <nav class="navbar-custom">
    <div class="nav-container">
      <div class="logo">
        <img :src="logo" alt="">
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <span></span><span></span><span></span>
      </div>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/#home">Home</router-link>
        <router-link to="/#portfolio">Portfolio</router-link>
        <router-link to="/#about">About Me</router-link>
        <router-link to="/#contact">Contact</router-link>
      </div>

      <div class="theme-switch-wrapper">
        <button class="theme-toggle-btn" @click="toggleTheme"
          :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <svg v-if="isDarkMode" class="theme-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          <svg v-else class="theme-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/images/download.png';

const isMenuOpen = ref(false);
const isDarkMode = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("តម្លៃបច្ចុប្បន្នគឺ:", isMenuOpen.value);
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark-theme');
  }
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

.navbar-custom {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-sizing: border-box;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px;
  min-height: 80px;
  box-sizing: border-box;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  border-radius: 50px;
  padding: 15px 40px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, .05);
}

.menu-toggle {
  display: none;
}

.nav-links a {
  margin: 0 15px;
  text-decoration: none;
  color: #475569;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 14px;
  cursor: pointer;
}

.nav-links a:hover {
  color: #000000;
}

.logo img {
  width: 80px;
}

.btn-contact {
  font-size: 14px;
}

.theme-switch-wrapper {
  display: flex;
  align-items: center;
}

.theme-toggle-btn {
  background: #f8f9fa;
  border: 1px solid #e5e7eb;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.theme-toggle-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: scale(1.05);
}

.theme-icon {
  width: 20px;
  height: 20px;
  color: #374151;
  transition: transform 0.3s ease;
}

.theme-toggle-btn:hover .theme-icon {
  transform: rotate(15deg);
}

:global(html.dark-theme) .theme-toggle-btn {
  background: #1f2937;
  border-color: #374151;
}

:global(html.dark-theme) .theme-icon {
  color: #f9fafb;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 15px 20px;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 25px;
    height: 3px;
    background: #333;
    border-radius: 2px;
  }

  .theme-switch-wrapper {
    display: none;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .15);
    z-index: 999;
    gap: 0px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 0;
    margin: 0;
  }
}
</style>