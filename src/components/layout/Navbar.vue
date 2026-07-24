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

      <div class="btn-contact">
        <base-button text="Get In Touch" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/images/download.png';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("តម្លៃបច្ចុប្បន្នគឺ:", isMenuOpen.value);
};
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
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

  .btn-contact {
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