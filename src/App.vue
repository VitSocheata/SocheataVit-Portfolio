<template>
  <div id="app">
    <Navbar /> 
    <router-view />
    <Footer/> 
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/FooTer.vue';
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })

  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault()
    }
  })
})
</script>