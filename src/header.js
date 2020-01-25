function navItem(linkName) {
  const li = document.createElement('li');
  li.classList.add('nav-tab');
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.setAttribute('id', `tab-${linkName}`);
  link.innerHTML = linkName;
  li.appendChild(link);
  return li;
}

const header = () => {
  const div = document.createElement('div');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.appendChild(navItem('home'));
  ul.appendChild(navItem('menu'));
  ul.appendChild(navItem('contact'));
  nav.appendChild(ul);
  header.appendChild(nav);
  div.appendChild(header);
  return div;
};

export default header;