import listItem from './listItem';

const menu = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'main-content');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'dish-list');
  let img = document.createElement('img');
  img.src = '../dist/assets/images/maki-sushi.jpg';
  img.alt = 'Maki sushi';
  let li = listItem('dish', 'maki-sushi', 'Maki sushi');
  let desc = li.childNodes[0];
  let p = document.createElement('p');
  p.innerHTML = 'jsahjhdjashdkjasd';
  li.appendChild(img);
  ul.appendChild(li);
  li = listItem('dish', 'norimaki-sushi', 'Norimaki sushi');
  desc.appendChild(p);
  img = document.createElement('img');
  img.src = '../dist/assets/images/norimaki.jpg';
  img.alt = 'Norimaki sushi';
  li.appendChild(img);
  ul.appendChild(li);
  li = listItem('dish', 'oshizushi-sushi', 'Oshizushi sushi');
  img = document.createElement('img');
  img.src = '../dist/assets/images/oshizushi.jpg';
  img.alt = 'Oshizushi sushi';
  li.appendChild(img);
  ul.appendChild(li);
  li = listItem('dish', 'uramaki-sushi', 'Uramaki sushi');
  img = document.createElement('img');
  img.src = '../dist/assets/images/uramaki.jpg';
  img.alt = 'Uramaki sushi';
  li.appendChild(img);
  ul.appendChild(li);
  li = listItem('dish', 'temaki-sushi', 'Temaki sushi');
  img = document.createElement('img');
  img.src = '../dist/assets/images/temaki.jpg';
  img.alt = 'Temaki sushi';
  li.appendChild(img);
  ul.appendChild(li);
  div.appendChild(ul);
  return div;
};


export default menu;