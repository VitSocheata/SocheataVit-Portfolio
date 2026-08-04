import emailjs from '@emailjs/browser';

export const sendEmailWithEmailJS = async (formData) => {
  
  const SERVICE_ID = 'service_adjmjz6';
  const TEMPLATE_ID = 'template_joyyg4v';
  const PUBLIC_KEY = 'i31wq0HQ2QP-R4gVA';

  
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,     
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return response;
  } catch (error) {
   
    throw error;
  }
};