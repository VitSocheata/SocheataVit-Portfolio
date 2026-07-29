<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <BaseTitle ftext="My" ltext="Portfolio"/>
      </div>
      <div class="portfolio-grid">
        <div
          class="portfolio-card"
          v-for="project in projects"
          :key="project.id"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          />

          <div class="card-content">
            <h3>{{ project.title }}</h3>

            <p>
              {{ project.description }}
            </p>

            <div class="tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
              >
                {{ tag }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              class="btn-view"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script setup>
import portfolio1 from "@/assets/images/reabList.png";
import portfolio2 from "@/assets/images/pralong.png";
import portfolio3 from "@/assets/images/internship.png";

const projects = [
  {
    id: 1,
    title: "Internship Center",
    description:
      "A responsive static website built using HTML, CSS, and Bootstrap, featuring modern layout designs and clean UI components.",
    image: portfolio3,
    tags: ["HTML", "CSS", "Bootstrap"],
    link: "https://github.com/Oeun-nuphea/internship-center.git",
  },
  {
    id: 2,
    title: "Reab List",
    description:
      "A dynamic productivity application built with Vue.js and JavaScript, allowing users to create, update, and manage tasks efficiently.",
    image: portfolio1,
    tags: ["JavaScript", "Vue.js", "Responsive"],
    link: "https://github.com/kemvanny/Vue_Project_ANT.git",
  },
  {
    id: 3,
    title: "Pralong",
    description:
      "A robust backend server built with Node.js and Express, handling database connections, authentication, and RESTful API endpoints.",
    image: portfolio2,
    tags: ["Node.js", "Express", "MySQL"],
    link: "https://github.com/kemvanny/quiz_frontend.git",
  },
];
</script>
<style scoped>
.portfolio-section {
  padding: 80px 0px 0px 0px;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.section-header {
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.portfolio-card {
  background: var(--bg-color);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.project-image {
  width: 100%;
  height: 230px;
  overflow: hidden;
  background: #f3f4f6;
  border-bottom: 1px solid var(--border-color);
}

.card-content {
  padding: 25px;
  font-weight: 700px;
}

.card-content h3 {
  margin-bottom: 15px;
  font-size: 24px;
  
}

.card-content p {
  color: #6b7280;
  line-height: 1.7;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tags span {
 background: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--main-color);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 999px;
}

.btn-view {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color);              
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}
@media (max-width: 768px) {
  .portfolio-section {
    padding: 20px 0;
  }


}

</style>