<template>
  <div class="hero-container">
    <nav class="navbar-custom">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
      <button class="btn-contact">Get In Touch</button>
    </nav>
  </div>
</template>
<script setup>
import logo from '@/assets/images/download.png';
</script>

<style scoped>

.navbar-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
}
.nav-links{
  background: #ffffff;
  border-radius: 50px;
  padding: 15px 40px;
  border: 1px solid #f0f0f0;
  margin: 20px auto;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: inline-flex;
  z-index: 1;
}
.nav-links a {
  margin: 0 15px;
  text-decoration: none;
  color: #475569; 
  font-weight: 600;
  transition: color 0.3s ease
}
.nav-links a:hover {
  color: #000000; 
}
.logo img{
  width: 80px;
}
</style>