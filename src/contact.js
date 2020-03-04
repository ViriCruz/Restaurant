const form = () => {
  const element = document.createElement('form');
  element.classList.add('contact-form');
  return element;
};

const label = (text, name) => {
  const element = document.createElement('label');
  element.for = name;
  element.textContent = text;
  return element;
};

const input = (element, id) => {
  const inputForm = document.createElement(`${element}`);
  inputForm.id = id;
  inputForm.name = id;
  return inputForm;
};

const contactInformation = () => {
  const div = document.createElement('div');
  div.classList.add('information-container');
  const phone = document.createElement('p');
  phone.textContent = '01179 231122';
  const span = document.createElement('span');
  span.textContent = 'Phone:';
  const addressLabel = document.createElement('span');
  addressLabel.textContent = 'Address:';
  addressLabel.classList.add('contact-details-label');
  span.classList.add('contact-details-label');
  const location = document.createElement('p');
  location.textContent = 'Carter Cres';
  const country = document.createElement('p');
  country.textContent = 'Gymea Bay NSW 2227, Australia';
  div.append(span, phone, addressLabel, location, country);
  return div;
};

const contactForm = () => {
  const formContainer = document.createElement('div');
  formContainer.id = 'main-content';
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact');
  const formElement = form();
  const subjectContainer = document.createElement('div');
  subjectContainer.append(label('Subject:', 'subject'), input('input', 'subject'));
  const bodyContainer = document.createElement('div');
  bodyContainer.append(label('Message:', 'message'), input('textarea', 'message'));
  formElement.append(subjectContainer, bodyContainer);
  formElement.appendChild(input('button', 'submit')).textContent = 'Submit';
  contactContainer.append(formElement, contactInformation());
  formContainer.appendChild(contactContainer);
  return formContainer;
};

export default contactForm;
