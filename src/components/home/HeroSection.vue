<template>
  <div  id="home" class="hero-container">
    <div class="content text-center mt-5">
      <div class="profile-img-wrapper mb-4">
        <img :src="socheata" class="profile-img" alt="Profile" />
        <div class="badge-container">
          <span class="badge-skill">Vue.js</span>
          <span class="badge-skill">Node.js</span>
          <span class="badge-skill">MySQL</span>
        </div>
      </div>

      <h1 class="name-title mt-3"><span>Vit</span> Socheata</h1>
      <p class="description ">Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always
        excited to connect.</p>
      <BaseButton />
    </div>


  </div>
</template>

<script setup>
import socheata from '@/assets/images/sct.JPEG'
</script>

<style scoped>
.hero-container {
  background-color: #ffffff; 
  overflow: visible;
  padding: 100px 0px;
  
}
.hero-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); 
  width: 100%;    
  height: 100%;
  background-image: 
    linear-gradient(#f3f3f3 1px, transparent 1px), 
    linear-gradient(90deg, #f3f3f3 1px, transparent 1px);
  background-size: 80px 80px; 
  -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
  mask-image: radial-gradient(circle at center, black 20%, transparent 80%);

  z-index: 0; 
  pointer-events: none; 
}

.content {
  position: relative;
  z-index: 0; 
}
.profile-img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 9px solid #fff;
  box-shadow: 0 0 0 2px #e5e7eb;
  object-fit: cover;
}

.badge-container {
  display: flex;
  gap: 10px;
  margin-top: 40px;
}

.badge-skill {
  background: #ffffff;
  padding: 6px 15px;
  border-radius: 50px;
  border: 1px solid #e5e7eb;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.name-title {
  font-size: 75px !important;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: #111827;
  margin-top: 20px;
}

.name-title span {
  color: #6b7280;
}

.description {
  margin: 20px 0px 35px 0px;
  padding-inline: 18px;
  color: #6b7280;
  font-size: 18px;
}
</style>