const form = document.querySelector('form')
const btn = document.querySelector('button')

const getRatingValue = () => form?.elements.namedItem('rating').value


const submitRating = () => {
  const ratingValue = getRatingValue()
  const ratingValueSpan = document.querySelector('#ratingValue')
  ratingValueSpan.innerText = ratingValue
}

const disableForm = () => {
  document.querySelector('fieldset')?.setAttribute('disabled', 'true')
  btn?.setAttribute('disabled', 'true')
  document.querySelector('.review-form')?.classList.toggle('submitted')
}

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!getRatingValue()) return
  submitRating()
  disableForm()
})
