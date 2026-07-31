<template>
  <section id="resume" class="education-section">
    <div class="container">
      <BaseTitle ftext="Education <br />&" ltext="Courses"/>

      <div class="education-list " >
        <div
          class="education-card"  data-aos="zoom-in"
          v-for="(item, index) in educationList"
          :key="index"
        >
          <div class="card-header">
            <div class="logo-box">
              <img :src="item.logo" :alt="item.school" />
            </div>

            <div class="header-content">
              <h3>{{ item.school }}</h3>
              <span>{{ item.course }}</span>
            </div>
          </div>

          <p class="date">{{ item.date }}</p>

          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ruppLogo from "@/assets/images/rupp.png";
import antLogo from "@/assets/images/ant.png";
import chineseLogo from "@/assets/images/chinese.png";

const educationList = [
  {
    logo: ruppLogo, 
    school: "Royal University of Phnom Penh",
    course: "Bachelor of Computer Science and Engineering",
    date: "2023 - 2026",
    description:
      "Fourth-year student specializing in Computer Science and Engineering, focusing on software development, web technologies, and modern programming architectures.",
  },
    {
    logo: chineseLogo, 
    school: "Confucius Institute of the Royal Academy of Cambodia",
    course: "Chinese Language Program",
    date: "2024 - 2026", 
    description:
      "Completed Chinese language proficiency up to HSK Level 3, developing strong foundational listening, reading, and conversational skills.",
  },
 {
    logo: antLogo,
    school: "ANT Technology Training Center",
    course: "Web Development Trainee Scholarship",
    date: "2025 - 2026",
    description:
      "Awarded a scholarship sponsored by the Ministry of Post and Telecommunications and CBRD Fund, focusing on professional web development training and hands-on coding workflows.",
  },

];
</script>

<style scoped>
.education-section {
  padding: 80px 0px 0px 0px;
  background: var(--bg-color);
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
  color: #14213d;
  line-height: 1.15;
  margin: 0;
}

.education-list {
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

.education-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 28px 32px;
  transition: 0.3s ease;
}

.education-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 18px;
}

.logo-box {
  min-width: 64px;
  height: 64px;
  border-radius: 15px;
  background: var(--bg-icons);
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-box img {
  width: 38px;
  height: 38px;
}

.header-content h3 {
  margin: 0;
  font-size: 22px;
  color: var(--text-color);
  font-weight: 700;
}

.header-content span {
  color: var(--main-color);
  font-size: 15px;
  margin-top: 4px;
  display: block;
}


.date {
  font-size: 15px;
  color: var(--main-color);
  margin: 45px 0px 20px 0px;
}

.description {
  color: var(--main-color);
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}
@media (max-width: 992px) {
  .container {
    flex-direction: column;
    gap: 40px;
  }

  .name-title,
  .education-list {
    width: 100%;
  }

  .name-title h2 {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .education-section {
    padding: 20px 0;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .name-title h2 {
    font-size: 34px;
  }

  .header-content h3 {
    font-size: 20px;
  }

  .description {
    font-size: 15px;
  }
}
</style>