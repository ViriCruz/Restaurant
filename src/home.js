const home = (parent) => {
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const parag = document.createElement('p');

  h1.innerHTML = 'The best sushi restaurant you will find ever!';
  img.src = '../dist/assets/images/sushi.jpg';
  parag.innerHTML = 'Want more?, check our menu here.';

  parent.appendChild(h1);
  parent.appendChild(img);
  parent.appendChild(parag);
};

export default home;