import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import km from '@/locales/km'
import zh from '@/locales/zh'

const messages = {
  en,
  km,
  zh
}

const i18n = createI18n({
  legacy: false, 
  locale: 'en',  
  fallbackLocale: 'en',
  messages
})

export default i18n