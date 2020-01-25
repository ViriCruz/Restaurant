import home from './home';
import header from './header';
import menu from './menu';

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(home());

// tab switching logic
document.getElementById('tab-home').addEventListener('click', () => {
  const child = document.getElementById('main-content');
  content.removeChild(child);
  content.appendChild(home());
});

document.getElementById('tab-menu').addEventListener('click', () => {
  const child = document.getElementById('main-content');
  content.removeChild(child);
  content.appendChild(menu());
});