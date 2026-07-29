<template>
  <a :href="link" v-bind="$attrs" class="btn-contact-large text-decoration-none" target="_blank" rel="noopener noreferrer">
    <i :class="icon" class="fs-4"></i> {{ text }}
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Contact Me" 
  },
  link: {
    type: String,
    default: "https://www.linkedin.com/in/socheata-vit"
  },
  icon: {
    type: String,
    default: "fab fa-linkedin" 
  }
})
</script>

<style scoped>
.btn-contact-large {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-color);
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  padding: 15px 23px;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, .05);
  color:var(--main-color);
}


.btn-contact:hover, .btn-contact-large:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-2px);
}
</style>