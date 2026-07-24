<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">

        <h2 class="name-title">Let's Build Something <span>Great Together</span></h2>

        <p>
          Whether you have a project in mind, a collaboration opportunity,
          or simply want to say hello, I'd love to hear from you.
        </p>
        <BaseButton />
      </div>

      <div class="divider"></div>

      <div class="footer-bottom">

        <p>
          © 2026 Vit Socheata. All rights reserved.
        </p>

        <div class="social-links">
          <a href="https://github.com/VitSocheata" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/socheata-vit" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://t.me/socheatavit" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-telegram"></i>
          </a>
          <a href="https://www.facebook.com/share/1KTcAKZh2L/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/wei__yingying" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #ffffff;
  padding:  0px 100px 40px;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
}

.logo img {
  width: 80px;
}


.footer-top {
  text-align: center;
  max-width: 700px;
  margin: auto;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 24px;
}

.logo span {
  color: #2563eb;
}

.footer-top h2 {
  font-size: 52px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 20px;
}

.footer-top p {
  font-size: 18px;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 40px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 15px 32px;

  border-radius: 999px;

  background: #111827;
  color: white;

  text-decoration: none;
  font-weight: 600;

  transition: 0.3s;
}

.contact-btn i {
  font-size: 18px;
}

.contact-btn:hover {
  background: #2563eb;
  transform: translateY(-3px);
}

.divider {
  margin: 80px 0 35px;
  border-top: 1px solid #e5e7eb;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  color: #6b7280;
  font-size: 15px;
}

.social-links {
  display: flex;
  gap: 14px;
}

.social-links a {
  width: 46px;
  height: 46px;

  border-radius: 50%;
  border: 1px solid #e5e7eb;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #374151;

  transition: 0.3s;
}

.social-links a:hover {
  background: #111827;
  color: white;
  border-color: #111827;
  transform: translateY(-3px);
}

@media (max-width: 768px) {

  .footer {
    padding: 70px 0 30px;
  }

  .footer-top h2 {
    font-size: 36px;
  }

  .footer-top p {
    font-size: 16px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>