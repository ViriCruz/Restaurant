import home from './home';
import header from './header';

const init = (() => {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(home());
})();

export default init;
