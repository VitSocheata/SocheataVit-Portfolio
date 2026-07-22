<template>
  <a :href="link" class="btn-contact-large text-decoration-none" target="_blank" rel="noopener noreferrer">
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
    default: "#"
  },
  icon: {
    type: String,
    default: "fab fa-linkedin" 
  }
})
</script>