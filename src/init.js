import home from './home';
import header from './header';

const init = (() => {
  const content = document.getElementById('content');
  content.append(header(), home());
})();

export default init;
