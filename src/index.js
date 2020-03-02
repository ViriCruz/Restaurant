import home from './home';
import menu from './menu';
import contact from './contact';
import removeClassList from './removeClassList';
import './init';

const content = document.getElementById('content');

// tab switching logic
document.getElementById('tab-home').addEventListener('click', (e) => {
  const child = document.getElementById('main-content');
  content.replaceChild(home(), child);
  removeClassList();
  e.target.classList.add('selected');
  e.preventDefault();
});

document.getElementById('tab-menu').addEventListener('click', (e) => {
  const child = document.getElementById('main-content');
  content.replaceChild(menu(), child);
  removeClassList();
  e.target.classList.add('selected');
  e.preventDefault();
});

document.getElementById('tab-contact').addEventListener('click', (e) => {
  const child = document.getElementById('main-content');
  content.replaceChild(contact(), child);
  removeClassList();
  e.target.classList.add('selected');
  e.preventDefault();
});
