import listItem from './listItem';

const header = () => {
  const div = document.createElement('div');
  div.classList.add('dark-faded');
  const headerTag = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.append(
    listItem('nav-tab', 'tab-home', 'home'),
    listItem('nav-tab', 'tab-menu', 'menu'),
    listItem('nav-tab', 'tab-contact', 'contact'),
  );
  ul.querySelector('#tab-home').classList.add('selected');
  nav.append(ul);
  headerTag.append(nav);
  div.append(headerTag);
  return div;
};

export default header;
