<template>
  <section class="skill-section">
    <div class="container">
      <div class="name-title">
        <h2>Skill <span>Set</span></h2>
      </div>
      <div class="skill-content">
        <div class="skill-group">
          <h3>Product</h3>
          <div class="tags">
            <span
              v-for="(skill, index) in productSkills"
              :key="index"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="skill-group">
          <h3>UX Design</h3>

          <div class="tags">
            <span
              v-for="(skill, index) in uxSkills"
              :key="index"
            >
              {{ skill }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const productSkills = [
  "Design System",
  "Lean UX",
  "Agile Methodology",
  "Data Analysis",
  "Startups",
  "Data-Driven Design",
  "User Centered Design",
  "UI Kits",
];

const uxSkills = [
  "User Interviews",
  "Surveys",
  "Personas",
  "Competitor Audits",
  "User Journey Maps",
  "Empathy Maps",
  "User Stories",
  "Usability Testing",
  "A/B Testing",
  "Mind Mapping",
  "User Flows",
  "Information Architecture",
];
</script>

<style scoped>
.skill-section {
  padding: 100px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;

  display: flex;
  gap: 70px;
  align-items: flex-start;
}

.name-title {
  width: 30%;
}

.name-title h2 {
  font-size: 56px;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
  margin: 0;
}

.skill-content {
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 40px;
}
.skill-group h3 {
  font-size: 22px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.tags span {
  padding: 12px 20px;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  background: #fff;
  color: #374151;

  font-size: 15px;
  font-weight: 500;

  transition: all 0.25s ease;
  cursor: default;
}

.tags span:hover {
  background: #111827;
  color: #fff;
  border-color: #111827;
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    gap: 40px;
  }

  .name-title,
  .skill-content {
    width: 100%;
  }

  .name-title h2 {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .skill-section {
    padding: 60px 0;
  }

  .name-title h2 {
    font-size: 34px;
  }

  .skill-group h3 {
    font-size: 20px;
  }

  .tags {
    gap: 12px;
  }

  .tags span {
    padding: 10px 16px;
    font-size: 14px;
  }
}
</style>