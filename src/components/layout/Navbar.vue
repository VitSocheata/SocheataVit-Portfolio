<template>
  <nav class="navbar-custom">
    <div class="nav-container">
      <div class="logo">
        <img :src="isDarkMode ? whiteLogo : blackLogo" alt="" />
      </div>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link to="/#home">{{ $t("home") }}</router-link>
        <router-link to="/#about">{{ $t("about") }}</router-link>
        <router-link to="/#resume">{{ $t("resume") }}</router-link>
        <router-link to="/#portfolio">{{ $t("portfolio") }}</router-link>
        <router-link to="/#contact">{{ $t("contact") }}</router-link>
      </div>

      <div class="nav-right-actions">
        <div class="custom-dropdown" @mouseleave="closeDropdown">
          <button
            class="dropdown-toggles"
            type="button"
            @click="toggleLang"
          >
            <span :class="['fi', currentFlagClass]"></span>
            <span class="lang-code">{{ currentLangText }}</span>
            <span class="arrow" :class="{ rotate: isOpen }">▼</span>
          </button>
          

          <ul v-show="isOpen  " class="language-dropdown">
            <li @click="changeLanguage('en')">
              <span class="fi fi-gb"></span> English
            </li>
            <li @click="changeLanguage('km')">
              <span class="fi fi-kh"></span> ភាសាខ្មែរ
            </li>
            <li @click="changeLanguage('zh')">
              <span class="fi fi-cn"></span> 中文
            </li>
          </ul>
        </div>
        <div class="theme-switch-wrapper">
          <button
            class="theme-toggle-btn"
            @click="toggleTheme"
            :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <svg
              v-if="isDarkMode"
              class="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              />
            </svg>
            <svg
              v-else
              class="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          </button>
        </div>

        <div class="menu-toggle" @click="toggleMenu">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import blackLogo from "@/assets/images/download.png";
import whiteLogo from "@/assets/images/darkmodelogo.png";
const { locale } = useI18n();

const isOpen = ref(false);
const isMenuOpen = ref(false);
const isDarkMode = ref(false);

const toggleLang = () =>{
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
}
const closeDropdown = () => {
    isOpen.value = false
    console.log(isMenuOpen.value);
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
};

const currentFlagClass = computed(() => {
  if (locale.value === "km") return "fi-kh";
  if (locale.value === "zh") return "fi-cn";
  return "fi-gb";
});

const currentLangText = computed(() => {
  if (locale.value === "km") return "KH";
  if (locale.value === "zh") return "ZH";
  return "EN";
});

const changeLanguage = (lang) => {
  locale.value = lang;
  isOpen.value = false;
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark-theme");
  }
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

.navbar-custom {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--bg-color);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-sizing: border-box;
  overflow: visible !important;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px;
  min-height: 80px;
  box-sizing: border-box;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--bg-color);
  border-radius: 50px;
  padding: 15px 40px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.menu-toggle {
  display: none;
}

.nav-right-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  /* z-index:100; */
  /* position: relative; */
}

.nav-links a {
  font-family: "Inter", "Kantumruy Pro", sans-serif;
  margin: 0 15px;
  text-decoration: none;
  color: var(--main-color);
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 14px;
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--text-color);
}

.logo img {
  width: 80px;
}

.btn-contact {
  font-size: 14px;
}

.theme-switch-wrapper {
  display: flex;
  align-items: center;
}

.theme-toggle-btn {
  background: var(--bg-icons);
  border: 1px solid var(--border-color);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.theme-toggle-btn:hover {
  background: var(--bg-icons);
  border-color: #d1d5db;
  transform: scale(1.05);
}

.theme-icon {
  width: 20px;
  height: 20px;
  color: var(--text-color);
  transition: transform 0.3s ease;
}

.theme-toggle-btn:hover .theme-icon {
  transform: rotate(15deg);
}

:global(html.dark-theme) .theme-toggle-btn {
  background: #1f2937;
  border-color: #374151;
}

:global(html.dark-theme) .theme-icon {
  color: #f9fafb;
}

.custom-dropdown {
  position: relative;
  display: inline-block;
  overflow: visible !important;
}

.dropdown-toggles {
  background: var(--bg-icons, #f3f4f6);
  border: 1px solid var(--border-color, #e5e7eb);
  padding: 8px 12px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-color, #333);
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);

}

.dropdown-toggles:hover {
  border-color: #a9a8a8;
}

.dropdown-toggles .fi, 
.language-dropdown .fi {
  width: 20px;
  height: 15px;
  border-radius: 2px;
  object-fit: cover;
  display: inline-block;
}

.lang-code {
  letter-spacing: 0.5px;
}

.arrow {
  font-size: 8px;
  transition: transform 0.3s ease;
  opacity: 0.7;
}

.arrow.rotate {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 104%;
  right: -15%;
  background-color: var(--bg-color);
  color: var(--text-color, #333333);
  min-width: 110px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  list-style: none;
  padding: 6px 0;
  margin: 0;
  z-index: 9999999 !important; 
  border: 1px solid var(--border-color, #e5e7eb);
}

.language-dropdown li {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.language-dropdown li:hover {
  background-color: rgba(59, 130, 246, 0.1);
  color: #2563eb;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0px 20px;
    justify-content: none;
  }

  .nav-right-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    border-radius: 2px;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border-radius: 15px;
    background: var(--bg-color);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 999;
    gap: 0px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 0;
    margin: 0;
  }
}
</style>
