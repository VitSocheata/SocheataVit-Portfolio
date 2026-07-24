<template>
  <div >
    <HeroSection/>
    <MyWork/>
    <EducationSection/>
    <SkillSet/>
    <Portfolio/>
    <Contact/>
  </div>
</template>
<script setup >
import HeroSection from '@/components/home/HeroSection.vue';
import MyWork from '@/components/home/WorkHistory.vue';
import EducationSection from '@/components/home/EducationSection.vue';
import SkillSet from '@/components/home/SkillSet.vue';
import Portfolio from '@/components/home/Portfolio.vue';
import Contact from '@/components/home/Contact.vue';

</script>