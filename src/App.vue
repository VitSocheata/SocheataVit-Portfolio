<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  })
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