<template>
  <section id="contact" class="contact-section"  >
    <div class="container">
      <div class="section-header"  data-aos="zoom-in">
        <BaseTitle firstText="Get In" lastText="Touch"/>

        <p>
          Whether you're looking to discuss a new project, seek advice,
          or collaborate, I'm always excited to connect and explore new
          possibilities.
        </p>

        <BaseButton text="Get In Touch" data-aos="zoom-in" />

        <div class="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
      </div>

      <div class="contact-card"  data-aos="zoom-in">
      <div class="error-alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
        <form @submit.prevent="submitForm">
          <div class="grid">

            <div class="form-group">
              <label>Full Name</label>
              <input type="text" v-model="form.name" @blur="handleBlur('name')" placeholder="Jane Smith" />
              <span class="error-text" v-if="touched.name && errors.name">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" @blur="handleBlur('email')" placeholder="email@example.com" />
              <span class="error-text" v-if="touched.email && errors.email">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label>Mobile Number</label>
              <input type="tel" v-model="form.phone" @blur="handleBlur('phone')" placeholder="+855 96 853 9827" />
              <span class="error-text" v-if="touched.phone && errors.phone">{{ errors.phone }}</span>
            </div>

            <div class="form-group">
              <label>Subject</label>
              <select v-model="form.subject" class="form-control" @blur="handleBlur('subject')" :class="{ 'is-placeholder': !form.subject }">
                <option value="" disabled selected>Select your inquiry topic</option>
                <option value="job">Job Offer / Hiring</option>
                <option value="project">Freelance / Web Project</option>
                <option value="collaboration">Collaboration</option>
                <option value="robotics">Robotics Training / Education</option>
                <option value="other">Other</option>
              </select>
              <span class="error-text" v-if="touched.subject && errors.subject">{{ errors.subject }}</span>
            </div>

            <div class="form-group full">
              <label>Message</label>
              <textarea rows="6" v-model="form.message" @blur="handleBlur('message')" placeholder="Enter here..."></textarea>
              <span class="error-text" v-if="touched.message && errors.message">{{ errors.message }}</span>
            </div>

            <button class="submit-btn" :disabled="!isFormComplete || isLoading || isSuccess" type="submit">
              <span v-if="isLoading">Sending...</span>
              <span v-else-if="isSuccess">Success ✓</span>
              <span v-else>Submit</span>
            </button>

          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFormValidation } from "@/composable/useFormValidation";
import { useFormSubmit } from "@/composable/useFormSubmit";
import { sendEmailWithEmailJS } from "@/services/emailService";

const{ form, errors,isFormComplete, touched ,handleBlur} = useFormValidation();

const {isLoading,isSuccess,errorMessage,handleSubmit} = useFormSubmit(sendEmailWithEmailJS);

const submitForm = () => {
  if (!isFormComplete.value) return;
  
  handleSubmit(form, () => {
    form.name = "";
    form.email = "";
    form.phone = "";
    form.subject = "";
    form.message = "";
  
    Object.keys(touched).forEach(key => touched[key] = false);
  });
};
</script>

<style scoped>
.error-text {
  color: #ef4444;
  font-size: 13px;
  margin-top: 6px;
  display: block;
}

.error-alert {
  background-color: #fee2e2;
  color: #991b1b;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border: 1px solid #fecaca;
}

.success-btn {
  background-color: #10b981 !important;
  color: white !important;
  border-color: #10b981 !important;
  opacity: 1 !important;
}

.contact-section {
  padding: 80px 0px 0px 0px;
  background: var(--bg-color);
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
  font-weight: 700;
  color: #374151;
  margin-bottom: 18px;
}

.section-header h2 span {
  font-weight: 700;
  color: #111827;
}

.section-header p {
  max-width: 650px;
  margin: 30px auto;
  color: var(--main-color);
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
  background: var(--border-color);
}

.divider p {
  color: #9ca3af;
  margin: 0;
  font-size: 14px;
}

.contact-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, .05);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  color: var(--color-skill);
}

.form-control {
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
}

.form-control:focus {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.form-control.is-placeholder {
  color: #9ca3af; 
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 15px;
  transition: .25s;
  outline: none;
  box-sizing: border-box;
  background: var(--bg-color);
  color: var(--text-color);
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

input:focus,
textarea:focus {
  border-color: #111827;
  box-shadow: 0 0 0 4px rgba(17, 24, 39, .08);
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
  background-color: #111827;
  color: #ffffff;          
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:disabled {
  background-color: var(--border-color) !important; 
  color: #9ca3af !important;             
  cursor: not-allowed;              
  box-shadow: none;
  opacity: 1;
}

.submit-btn:not(:disabled):hover {
  background-color: #1f2937; 
  opacity: 0.95;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 20px 0px;
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