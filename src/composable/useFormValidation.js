import { reactive, computed } from 'vue'

export function useFormValidation() {
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const touched = reactive({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  })

  const REGEX = {
    name: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?\d{9,15}$/,
    symbolsOnly: /^(\s*[-_!@#$%^&*(),.?":{}|<>]?\s*)+$/
  }

  const errors = computed(() => {
    const errs = {}
    
    const cleanName = form.name.trim()
    const cleanEmail = form.email.trim()
    const cleanPhone = form.phone.trim().replace(/\s+/g, '')
    const cleanMessage = form.message.trim()

    if (!cleanName) {
      errs.name = 'Full Name is required.'
    } else if (cleanName.length < 3) {
      errs.name = 'Name must be at least 3 characters.'
    } else if (!REGEX.name.test(cleanName)) {
      errs.name = 'Name can only contain letters and spaces.'
    }

    if (!cleanEmail) {
      errs.email = 'Email is required.'
    } else if (!REGEX.email.test(cleanEmail)) {
      errs.email = 'Please enter a valid email address.'
    }

    if (!cleanPhone) {
      errs.phone = 'Mobile Number is required.'
    } else if (!REGEX.phone.test(cleanPhone)) {
      errs.phone = 'Please enter a valid phone number digits only 9-15 numbers.'
    }

    if (!form.subject) {
      errs.subject = 'Please select an inquiry topic.'
    }

    if (!cleanMessage) {
      errs.message = 'Message cannot be empty.'
    } else if (cleanMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters.'
    } else if (REGEX.symbolsOnly.test(cleanMessage)) {
      errs.message = 'Message cannot contain only symbols or spaces.'
    }

    return errs
  })

  const isFormComplete = computed(() => {
    return Object.keys(errors.value).length === 0
  })

  const handleBlur = (field) => {
    touched[field] = true
  }

  return {
    form,
    errors,
    touched,
    isFormComplete,
    handleBlur
  }
}