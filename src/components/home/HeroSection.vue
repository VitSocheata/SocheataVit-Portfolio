<template>
  <div class="hero-container">
    <div class="content text-center mt-5">
      <div class="profile-img-wrapper">
        <img src="" class="profile-img" alt="Profile" />
        <div class="floating-badge left">UX Design</div>
        <div class="floating-badge right">Figma</div>
      </div>
      
      <div class="mt-4">
        <span class="badge-skill">Product Design</span>
        <span class="badge-skill">UI/UX Design</span>
        <span class="badge-skill">Web Design</span>
      </div>

      <h1 class="name-title mt-3">Vit Socheata</h1>
      <p class="description">Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always excited to connect.</p>
      
      <button class="btn-main-contact">Contact Me</button>
    </div>
  </div>
</template>

<style scoped>
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.badge-skill {
  background: #f3f4f6;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 0 5px;
  font-weight: 500;
}
.profile-img-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 50px;
}
.floating-badge {
  position: absolute;
  background: white;
  padding: 5px 15px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-size: 12px;
}
.floating-badge.left { top: 20px; left: -50px; }
.floating-badge.right { top: 20px; right: -50px; }


</style>