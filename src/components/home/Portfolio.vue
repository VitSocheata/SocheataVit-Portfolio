<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <BaseTitle ftext="My" ltext="Portfolio"/>
      </div>
      <div class="portfolio-grid">
        <div
          class="portfolio-card"
          v-for="project in displayedProjects"
          :key="project.id"
        >
          <div class="image-wrapper">
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            />
            <div class="project-overlay">
              <a :href="project.liveUrl" target="_blank" class="overlay-icon" title="View Live Site">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a :href="project.link" target="_blank" class="overlay-icon" title="View GitHub Source">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

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
          </div>
        </div>
      </div>
      <div class="view-all-container">
        <button @click="toggleViewAll" class="view-all-btn">
          {{ showAll ? 'Show Less' : 'View All' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import portfolio1 from "@/assets/images/reabList.png";
import portfolio2 from "@/assets/images/pralong.png";
import portfolio3 from "@/assets/images/internship.png";
import portfolio4 from "@/assets/images/movie.png";
import portfolio5 from "@/assets/images/calculate.png";
import portfolio6 from "@/assets/images/coming.png";

const showAll = ref(false);

const projects = ref([
  {
    id: 1,
    title: "Internship Center",
    description:
      "A responsive static website built using HTML, CSS, and Bootstrap, featuring modern layout designs and clean UI components.",
    image: portfolio3,
    tags: ["HTML", "CSS", "Bootstrap"],
    liveUrl:"https://ant-internship-center.vercel.app/",
    link: "https://github.com/Oeun-nuphea/internship-center.git",
  },
  {
    id: 2,
    title: "Reab List",
    description:
      "A dynamic productivity application built with Vue.js and JavaScript, allowing users to create, update, and manage tasks efficiently.",
    image: portfolio1,
    tags: ["JavaScript", "Vue.js", "Responsive"],
    liveUrl:"https://reablist.vercel.app/",
    link: "https://github.com/kemvanny/Vue_Project_ANT.git",
  },
  {
    id: 3,
    title: "Pralong",
    description:
      "A robust backend server built with Node.js and Express, handling database connections, authentication, and RESTful API endpoints.",
    image: portfolio2,
    tags: ["Node.js", "Express", "MySQL"],
    liveUrl:"https://qmlsystem.tdomain.work.gd/",
    link: "https://github.com/kemvanny/quiz_frontend.git",
  },
  {
    id: 4,
    title: "Movie",
    description:
      "An interactive web application featuring full CRUD functionalities, detailed movie views, dynamic ratings, and form validations.",
    image: portfolio4,
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl:"https://movie-management-system-pi.vercel.app/",
    link: "https://github.com/VitSocheata/Movie-Management-System.git",
  },
  {
    id: 5, 
    title: "Calculate",
    description:
      "An interactive calculation web application built with HTML, CSS, Bootstrap, and JavaScript, featuring clean UI layouts and smooth functional operations.",
    image: portfolio5,
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl:"https://calculation-six-beige.vercel.app/",
    link: "https://github.com/VitSocheata/Calculation.git",
  },
 {
    id: 6,
    title: "Coming Soon",
    description:
      "An upcoming project currently in development, featuring modern web technologies and innovative digital solutions. Stay tuned for updates!",
    image: portfolio6,
    tags: ["In Progress", "Coming Soon"],
    liveUrl: "#",
    link: "#",
  },
]);

const displayedProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 3);
});

const toggleViewAll = () => {
  showAll.value = !showAll.value;
};
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
  color: var(--main-color);
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


.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border-radius: 15px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color, #e5e7eb);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  border-color: #111827;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 200px; 
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.portfolio-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .project-overlay {
  opacity: 1;
}

.overlay-icon {
  width: 45px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.overlay-icon:hover {
  background-color: #ffffff;
  color: #000000;
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .portfolio-section {
    padding: 20px 0;
  }


}

</style>