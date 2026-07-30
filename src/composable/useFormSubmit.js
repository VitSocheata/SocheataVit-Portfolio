import { ref } from 'vue'

export function useFormSubmit(submitAction) {
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  const handleSubmit = async (formdata, resetFormCallback) => {
    isLoading.value = true
    isSuccess.value = false
    errorMessage.value = ''

    try {
        
      await submitAction(formdata)

      isSuccess.value = true

      if (resetFormCallback) {
        resetFormCallback()
      }

      setTimeout(() => {
        isSuccess.value = false
      }, 3000)

    } catch (error) {
      console.error('Submission error:', error)
      errorMessage.value = 'Something went wrong. Please try again later.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    isSuccess,
    errorMessage,
    handleSubmit
  }
}