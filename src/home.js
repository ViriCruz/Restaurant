const home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'main-content');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const parag = document.createElement('p');

  h1.innerHTML = 'The best sushi restaurant you will find ever!';
  img.src = '../dist/assets/images/sushi.jpg';
  parag.innerHTML = 'Want more?, check our menu here.';

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(parag);
  return div;
};

export default home;