import { reactive, computed } from 'vue'
import i18n from '@/i18n' 

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
      errs.name = i18n.global.t('errNameRequired')
    } else if (cleanName.length < 3) {
      errs.name = i18n.global.t('errNameMin')
    } else if (!REGEX.name.test(cleanName)) {
      errs.name = i18n.global.t('errNameRegex')
    }

    if (!cleanEmail) {
      errs.email = i18n.global.t('errEmailRequired')
    } else if (!REGEX.email.test(cleanEmail)) {
      errs.email = i18n.global.t('errEmailInvalid')
    }

    if (!cleanPhone) {
      errs.phone = i18n.global.t('errPhoneRequired')
    } else if (!REGEX.phone.test(cleanPhone)) {
      errs.phone = i18n.global.t('errPhoneInvalid')
    }

    if (!form.subject) {
      errs.subject = i18n.global.t('errSubjectRequired')
    }

    if (!cleanMessage) {
      errs.message = i18n.global.t('errMessageRequired')
    } else if (cleanMessage.length < 10) {
      errs.message = i18n.global.t('errMessageMin')
    } else if (REGEX.symbolsOnly.test(cleanMessage)) {
      errs.message = i18n.global.t('errMessageSymbols')
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