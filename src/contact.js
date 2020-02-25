const form = () => {
  const form = document.createElement('form')
  form.classList.add('contact-form')
  return form
}

const label = (text, name) => {
  const label = document.createElement('label')
  label.for = name
  label.textContent = text
  return label
}

const input = (element, id) => {
  const input = document.createElement(`${element}`)
  
  input.id = id
  input.name = id
  return input
}

const contactForm = () => {
  const formContainer = document.createElement('div')
  formContainer.id = 'main-content'
  const formElement = form()
  const subjectContainer = document.createElement('div')
  subjectContainer.appendChild(label('Subject:', 'subject'))
  subjectContainer.appendChild(input('input', 'subject'))
  const bodyContainer = document.createElement('div')
  bodyContainer.appendChild(label('Message:', 'message'))
  bodyContainer.appendChild(input('textarea', 'message'))
  formElement.appendChild(subjectContainer)
  formElement.appendChild(bodyContainer)
  formElement.appendChild(input('button','submit')).textContent = "Submit"
  formContainer.appendChild(formElement)
  console.log(formContainer);
  
  return formContainer
}

export default contactForm