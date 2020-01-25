const menu = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'main-content');
  const p = document.createElement('p');
  p.innerHTML = 'Here goes the menu';
  div.appendChild(p);
  return div;
};


export default menu;