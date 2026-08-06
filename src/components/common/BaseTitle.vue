<template>
    <div class="name-title" data-aos="zoom-in">
        <h2 v-html="firstText + ' <span>' + lastText + '</span>'"></h2>
        
    </div>
</template>
<script setup>
defineProps({
    firstText:{
        type:String,
        default:"Work"
    },
    lastText:{
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
  color: var( --subtitle-color);
}
</style>