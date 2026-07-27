<template>
  <section class="skill-section">
    <div class="container">
      <BaseTitle ftext="Skill" ltext="Set"/>
      <div class="skill-content">
        <div class="skill-group">
          <h3>Backend</h3>
          <div class="tags">
            <span
              v-for="(skill, index) in backendSkills"
              :key="index"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="skill-group">
          <h3>Frontend</h3>

          <div class="tags">
            <span
              v-for="(skill, index) in generalSkills"
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
const backendSkills = [
  "Node.js",
  "Express.js",
  "MySQL",
  "Database Design",
  "RESTful APIs",
  "Authentication-JWT",
  "Middleware",
  "Git & GitHub Workflow",
];

const generalSkills = [
  "JavaScript",
  "Vue.js",
  "HTML5 & CSS3",
  "Responsive Design",
  "Problem Solving",
  "API Integration",
  "Team Collaboration",
  "Debugging",
];
</script>

<style scoped>
.skill-section {
  padding: 0px 100px 0;
  background:var(--bg-color);
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
  color: var(--color-skill);
  margin-bottom: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.tags span {
  padding: 7px 20px;
  border: 1px solid #d1d5db;
  border-radius: 10px;

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
    padding: 7px 16px;
    font-size: 14px;
  }
}
</style>