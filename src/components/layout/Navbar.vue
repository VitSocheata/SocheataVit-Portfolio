<template>
  <div class="hero-container">
    <nav class="navbar-custom">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <span></span><span></span><span></span>
      </div>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">About Me</a>
        <a href="#">Contact</a>
      </div>
      <button class="btn-contact"><i class="fab fa-linkedin fs-4"></i>Get In Touch</button>
    </nav>
  </div>
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

.navbar-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: relative !important;
  min-height: 80px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  border-radius: 50px;
  padding: 15px 40px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0,0,0,.05);
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
}
.nav-links a:hover {
  color: #000000; 
}
.logo img{
  width: 80px;
}

.btn-contact{
  font-size: 14px;
}
@media (max-width: 768px) {

  .navbar-custom {
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
    top: 40%;
    left: 530px;
    right: 60px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 10px 25px rgba(0,0,0,.15);
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