<template>
  <div  id="home" class="hero-container">
    <div class="content text-center mt-5">
      <div class="profile-img-wrapper mb-4">
        <img :src="socheata" class="profile-img" alt="Profile" />
      </div>
     
      <h1 class="name-title mt-3"><span>Vit</span> Socheata</h1>

      <div class="role-subtitle-wrapper">
        <span class="role-subtitle">{{ displayedText }}</span>
        <span class="typing-cursor">|</span>
      </div>

      <p class="description ">Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always
        excited to connect.</p>
      <BaseButton />
    </div>


  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import socheata from '@/assets/images/sct.JPEG'

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Vue.js Enthusiast",
  "Robotics Instructor"
];

const displayedText = ref('');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId = null;

const typeEffect = () => {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    displayedText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    displayedText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  timeoutId = setTimeout(typeEffect, typingSpeed);
};

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  clearTimeout(timeoutId); 
});


</script>

<style scoped>
.hero-container {
  background-color: var(--bg-color, #ffffff); 
  overflow: visible;
  padding: 100px 0px;
  position: relative;
  transition: background-color 0.3s ease;
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
    linear-gradient(var(--grid-color, #f3f3f3) 1px, transparent 1px), 
    linear-gradient(90deg, var(--grid-color, #f3f3f3) 1px, transparent 1px);
  background-size: 80px 80px;
  -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
  mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
  z-index: 0;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
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
  border: 9px solid var(--bg-color, #ffffff);
  box-shadow: 0 0 0 2px var(--border-color, #e5e7eb);
  object-fit: cover;
  transition: border 0.3s ease;
}

.name-title {
  font-size: 75px !important;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: var(--text-main, #111827);
  margin-top: 20px;
}

.name-title span {
  color: #6b7280;
}

.role-subtitle {
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--text-main, #374151) 0%, var(--text-muted, #9ca3af) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin: 0px;
}

.role-subtitle-wrapper {
  font-size: 1.55rem;
  font-weight: 600;
  color: #2563eb; 
  margin: 25px;
  min-height: 30px;
  display: inline-flex;
  align-items: center;
}

.typing-cursor {
  font-weight: 300;
  color: var(--text-main, #495057);
  animation: blink 0.7s infinite;
  margin-left: 3px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.description {
  margin: 10px 0px 35px 0px;
  padding-inline: 18px;
  color: var(--text-muted, #6b7280);
  font-size: 18px;
}
</style>