<template>
  <section class="portfolio-section">
    <div class="container">

      <div class="section-header">
        <h2>Portfolio</h2>
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


const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern portfolio website built with Vue 3 showcasing projects, skills, and experience with a clean responsive design.",
    image: portfolio1,
    tags: ["Vue 3", "CSS", "Responsive"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A productivity application that allows users to create, update, and organize daily tasks using Vue and Pinia.",
    image: portfolio2,
    tags: ["Vue", "Pinia", "REST API"],
    link: "#",
  },
];
</script>
<style scoped>
.portfolio-section {
  padding: 100px 0;
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
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: .3s;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,.08);
}

.project-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.card-content {
  padding: 25px;
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
  gap: 10px;
  margin: 20px 0;
}

.tags span {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  font-size: 14px;
}

.btn-view {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
}
</style>