const home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'main-content');
  const container = document.createElement('div');
  container.classList.add('best-restaurant');
  const h1 = document.createElement('h1');

  h1.innerHTML = 'John Doe\'s sushi restaurant';
  container.appendChild(h1);
  div.appendChild(container);
  return div;
};

export default home;
