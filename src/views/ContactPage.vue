<template>
  <section class="contact-page">
    <h1 class="section-title animate-in">Contact Us</h1>
    <div class="contact-container">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Enter your name"
            minlength="2"
            maxlength="50"
          >
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email" 
            id="email"
            v-model="formData.email"
            required
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          >
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            required
            placeholder="Enter subject"
            minlength="3"
            maxlength="100"
          >
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Enter your message"
            rows="6"
            minlength="10"
            maxlength="1000"
          ></textarea>
          <span class="character-count">{{ formData.message.length }}/1000</span>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Sending...</span>
        </button>
      </form>

      <div class="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:support@example.com" style="text-align: left">support@example.com</a>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <a href="tel:+15551234567" style="text-align: left">+1 (555) 123-4567</a>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <a href="https://maps.google.com/?q=123+Gaming+Street,+Game+City,+GC+12345" target="_blank" style="text-align: left">
            123 Gaming Street, Game City, GC 12345
          </a>
        </div>
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener" aria-label="Discord"><i class="fab fa-discord"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const isSubmitting = ref(false);

    const validateForm = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.value.email)) {
        throw new Error('Please enter a valid email address');
      }
      if (formData.value.message.length < 10) {
        throw new Error('Message must be at least 10 characters long');
      }
    };

    const submitForm = async () => {
      if (isSubmitting.value) return;
      
      try {
        isSubmitting.value = true;
        validateForm();
        
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Form submitted:', formData.value);
        formData.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        //alert('Message sent successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
       // alert(error.message || 'There was an error sending your message. Please try again.');
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      formData,
      isSubmitting,
      submitForm
    };
  }
});
</script>

<style scoped>
.contact-page {
  padding: 60px 20px;
  max-width: 2000px;
  margin: 0 20%;
  min-height: calc(100vh - 160px);
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;
  color: #ffffff;
  font-weight: 700;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 30px;
  backdrop-filter: blur(10px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.form-group label {
  font-weight: 600;
  color: #e0e0e0;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(40, 40, 40, 0.9);
  color: #fff;
}

.form-group input:hover,
.form-group textarea:hover {
  border-color: #4a9eff;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.15);
}

.character-count {
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 0.8rem;
  color: #999;
}

.submit-btn {
  background: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:not(:disabled):hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,123,255,0.3);
}

.submit-btn:disabled {
  background: #444;
  cursor: not-allowed;
  transform: none;
}

.contact-info {
  padding: 20px;
  background: #222;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #e0e0e0;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.info-item {
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateX(5px);
}

.info-item i {
  font-size: 1.2rem;
  color: #007bff;
  width: 25px;
  text-align: left;
}

.info-item a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;
  text-align: left;
  width: 100%;
}

.info-item a:hover {
  color: #007bff;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
}

.social-links a {
  color: #007bff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #4a9eff;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .section-title {
    font-size: 2.5rem;
  }
  
  .contact-info {
    order: -1;
  }
  
  .social-links {
    margin-top: 20px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
