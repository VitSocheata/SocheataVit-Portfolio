<template>
  <section class="not-found">
    <div class="content">

      <div class="illustration">
        <img src="@/assets/images/notfound.jpg" alt="No Results" />
      </div>
      <h1>
        Whoops, no matches

      </h1>
      <p class="subtitle">
        We couldn't find any search results.
      </p>

      <p class="text">
        Give it another go.
      </p>

      <RouterLink to="/" class="home-btn">
        Back to Home
      </RouterLink>

    </div>
  </section>
</template>


<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: #f8fafc;
}

.content {
  max-width: 800px;
  width: 100%;
  text-align: center;
}


.illustration {
  width: 320px;
  height: 320px;
  margin: auto;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fallback-icon {
  display: none;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #ecfdf5;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}

h1 {
  font-size: 38px;
  color: #0f172a;
  margin-bottom: 18px;
  font-weight: 700;
}


.subtitle {
  color: #475569;
  font-size: 18px;
  margin-bottom: 10px;
}

.text {
  color: #94a3b8;
  margin-bottom: 40px;
  font-size: 16px;
}


.home-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;
  border-radius: 999px;
  background: var(--main-color);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: .3s;
}

.home-btn:hover {
  background: rgb(40, 40, 40);
  transform: translateY(-2px);
}

@media(max-width:768px) {

  h1 {
    font-size: 30px;
  }

  .subtitle {
    font-size: 16px;
  }

  .text {
    font-size: 15px;
  }

  .illustration {
    width: 180px;
    height: 180px;
  }

}
</style>