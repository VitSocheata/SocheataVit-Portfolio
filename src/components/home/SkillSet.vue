<template>
  <section class="skill-section">
    <div class="container">
      <BaseTitle firstText="Skill" lastText="Set"/>
      <div class="skill-content"  data-aos="zoom-in">
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
  padding:  80px 0px 0px 0px;
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
  color: var(--text-color);
  margin-bottom: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.tags span {
 position: relative;
  padding: 8px 22px;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 15px;
  font-weight: 500;
  border-radius: 12px;
  cursor: default;
  z-index: 1;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tags span::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1.5px;
  background: linear-gradient(90deg, #d1d5db, #9ca3af, #e5e7eb, #6b7280); /* ពណ៌ប្រផេះប្រាក់ */
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 1;
  animation: borderRotate 3s linear infinite;
}

.tags span:hover {
  transform: none;
  box-shadow: 0 2px 6px rgba(156, 163, 175, 0.2);
}

@keyframes borderRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
    padding: 20px 0;
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