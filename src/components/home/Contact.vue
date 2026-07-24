<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Whether you're looking to discuss a new project, seek advice,
          or collaborate, I'm always excited to connect and explore new
          possibilities.
        </p>

        <a href="mailto:youremail@example.com" class="contact-btn">
          Get In Touch
        </a>

        <div class="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
      </div>

      <!-- Contact Card -->
      <div class="contact-card">
        <form @submit.prevent="submitForm">
          <div class="grid">

            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                v-model="form.name"
                placeholder="Jane Smith"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                v-model="form.email"
                placeholder="email@example.com"
              />
            </div>

            <div class="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                v-model="form.phone"
                placeholder="+1 555 234 5678"
              />
            </div>

            <div class="form-group">
              <label>Subject</label>
              <input
                type="text"
                v-model="form.subject"
                placeholder="Design discussion"
              />
            </div>

            <div class="form-group full">
              <label>Message</label>
              <textarea
                rows="6"
                v-model="form.message"
                placeholder="Enter here..."
              ></textarea>
            </div>

            <button class="submit-btn">
              Submit
            </button>

          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log(form);

  alert("Message submitted successfully!");

  form.name = "";
  form.email = "";
  form.phone = "";
  form.subject = "";
  form.message = "";
};
</script>

<style scoped>
.contact-section {
  padding: 100px 20px;
  background: #ffffff;
}

.container {
  max-width: 900px;
  margin: auto;
}


.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 52px;
  font-weight: 300;
  color: #374151;
  margin-bottom: 18px;
}

.section-header h2 span {
  font-weight: 700;
  color: #111827;
}

.section-header p {
  max-width: 650px;
  margin: auto;
  color: #6b7280;
  font-size: 17px;
  line-height: 1.8;
}

.contact-btn {
  margin-top: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 34px;

  border-radius: 999px;

  background: #111827;
  color: white;
  text-decoration: none;

  font-weight: 600;
  transition: .3s;
}

.contact-btn:hover {
  background: #000;
  transform: translateY(-2px);
}

.divider {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 40px auto 0;
  max-width: 350px;
}

.divider span {
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.divider p {
  color: #9ca3af;
  margin: 0;
  font-size: 14px;
}

.contact-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0,0,0,.05);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full {
  grid-column: span 2;
}

label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;

  border: 1px solid #d1d5db;
  border-radius: 12px;

  font-size: 15px;

  transition: .25s;
  outline: none;
  box-sizing: border-box;
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

input:focus,
textarea:focus {
  border-color: #111827;
  box-shadow: 0 0 0 4px rgba(17,24,39,.08);
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  grid-column: span 2;

  padding: 16px;

  border: none;
  border-radius: 12px;

  background: #111827;
  color: white;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: .3s;
}

.submit-btn:hover {
  background: #000;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 70px 20px;
  }

  .section-header h2 {
    font-size: 38px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .full,
  .submit-btn {
    grid-column: span 1;
  }

  .contact-card {
    padding: 24px;
  }
}
</style>