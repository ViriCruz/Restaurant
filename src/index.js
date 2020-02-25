import home from './home';
import header from './header';
import menu from './menu';
import contact from './contact'

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(home());

// tab switching logic
document.getElementById('tab-home').addEventListener('click', (e) => {
  const child = document.getElementById('main-content');
  content.removeChild(child);
  content.appendChild(home());
  e.preventDefault()
});

document.getElementById('tab-menu').addEventListener('click', (e) => {
  const child = document.getElementById('main-content');
  content.removeChild(child);
  content.appendChild(menu());
  e.preventDefault()
});

document.getElementById('tab-contact').addEventListener('click', (e) => {
  const child = document.getElementById('main-content')
  content.removeChild(child)
  content.appendChild(contact())
  e.preventDefault()
})