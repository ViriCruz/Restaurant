import listItem from './listItem';
import maki from '../dist/assets/images/maki-sushi.jpg';
import norimaki from '../dist/assets/images/norimaki.jpg';
import oshizushi from '../dist/assets/images/oshizushi.jpg';
import temaki from '../dist/assets/images/temaki.jpg';
import uramaki from '../dist/assets/images/uramaki.jpg';

const addImg = (src, alt) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  const linkName = alt.toLowerCase().split(' ').join('-');
  const li = listItem('dish', linkName, alt);
  li.childNodes[0].classList.add('dish-description');
  li.append(img);
  return li;
};
const menu = () => {
  const imagesAttributes = [
    { src: maki, alt: 'Maki sushi' },
    { src: norimaki, alt: 'Norimaki sushi' },
    { src: oshizushi, alt: 'Oshizushi sushi' },
    { src: temaki, alt: 'Temaki sushi' },
    { src: uramaki, alt: 'Uramaki sushi' },
  ];
  const div = document.createElement('div');
  div.setAttribute('id', 'main-content');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  const h2 = document.createElement('h2');
  h2.textContent = 'Gallery';
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'dish-list');
  ul.append(...imagesAttributes.map(attr => addImg(attr.src, attr.alt)));
  menuContainer.appendChild(h2);
  menuContainer.appendChild(ul);
  div.appendChild(menuContainer);
  return div;
};


export default menu;
