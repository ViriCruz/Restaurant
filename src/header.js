import listItem from './listItem';

const header = () => {
  const div = document.createElement('div');
  div.classList.add('dark-faded');
  const headerTag = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const liSelected = listItem('nav-tab', 'tab-home', 'home');
  const container = liSelected.firstChild;
  container.firstChild.classList.add('selected');
  ul.appendChild(liSelected);
  ul.appendChild(listItem('nav-tab', 'tab-menu', 'menu'));
  ul.appendChild(listItem('nav-tab', 'tab-contact', 'contact'));
  nav.appendChild(ul);
  headerTag.appendChild(nav);
  div.appendChild(headerTag);
  return div;
};

export default header;
