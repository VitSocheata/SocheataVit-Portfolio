<template>
  <section id="resume" class="work-history">
    <div class="container">
      <BaseTitle :firstText="$t('workTitleFirst')" :lastText="$t('workTitleLast')"/>

      <div class="right">
        <div
          class="work-card" 
          data-aos="zoom-in"
          v-for="(job, index) in translatedJobs"
          :key="index"
        >
          <div class="card-header">
            <div class="company-logo">
              <img :src="job.logo" alt="logo" />
            </div>

            <div class="company-info">
              <h3>{{ job.company }}</h3>
              <h4>{{ job.position }}</h4>
              <p class="date">{{ job.date }}</p>
            </div>
          </div>

          <p class="description">
            {{ job.description }}
          </p>

          <div class="tags">
            <span>{{ job.category }}</span>
            <span>{{ job.type }}</span>
            <span>{{ job.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import antLogo from "@/assets/images/ant.png"
import aaaLogo from "@/assets/images/aaa.png"

const { tm } = useI18n();

const logos = [aaaLogo, antLogo];

const translatedJobs = computed(() => {
  const list = tm('jobsList');
  if (!Array.isArray(list)) return [];

  return list.map((job, index) => ({
    ...job,
    logo: logos[index] || aaaLogo
  }));
});
</script>

<style scoped>
.work-history {
  padding: 80px 0px 0px 0px;
  background: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 70px;
}

.right {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.work-card {
  background: var(--bg-color);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  gap: 20px;
  align-items: center;
}

.company-logo {
  width: 64px;
  height: 64px;
  border-radius: 28%;
  background: var(--bg-icons);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.company-logo img {
  width: 38px;
  height: 38px;
}

.company-info h3 {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: var(--text-color);
}

.company-info h4 {
  margin: 8px 0;
  font-size: 18px;
  color: var(--main-color);
  font-weight: 600;
}

.date {
  color: var(--main-color);
  font-size: 15px;
}

.description {
  margin-top: 24px;
  line-height: 1.8;
  color: var(--main-color);
  font-size: 16px;
}

.tags {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tags span {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  color: var(--main-color);
  font-size: 14px;
  background: var(--bg-color);
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    gap: 40px;
  }

  .left,
  .right {
    width: 100%;
  }

  .left h2 {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .work-history {
    padding: 20px 0px !important;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .company-info h3 {
    font-size: 22px;
  }

  .company-info h4 {
    font-size: 16px;
  }

  .description {
    font-size: 15px;
  }

  .left h2 {
    font-size: 36px;
  }

  .tags {
    gap: 10px;
  }

  .tags span {
    font-size: 13px;
    padding: 8px 14px;
  }
}
</style>