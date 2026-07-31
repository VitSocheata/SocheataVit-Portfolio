<template>
    <div class="name-title" data-aos="zoom-in">
        <h2 v-html="ftext + ' <span>' + ltext + '</span>'"></h2>
        
    </div>
</template>
<script setup>
defineProps({
    ftext:{
        type:String,
        default:"Work"
    },
    ltext:{
        type:String,
        default: "History"
    }
})
</script>
<style scoped>

.name-title h2 {
  font-size: 56px;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.1;
}
.name-title :deep(span) {
  color: #6b7280;
}
</style>