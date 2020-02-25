import listItem from './listItem';

const header = () => {
  const div = document.createElement('div');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.appendChild(listItem('nav-tab', 'tab-home', 'home'));
  ul.appendChild(listItem('nav-tab', 'tab-menu', 'menu'));
  ul.appendChild(listItem('nav-tab', 'tab-contact', 'contact'));
  nav.appendChild(ul);
  header.appendChild(nav);
  div.appendChild(header);
  return div;
};

export default header;
