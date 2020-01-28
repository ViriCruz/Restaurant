const listItem = (nameClass, linkName, linkText) => {
  const li = document.createElement('li');
  li.classList.add(nameClass);
  const link = document.createElement('a');
  const div = document.createElement('div');
  
  link.setAttribute('href', '#');
  link.setAttribute('id', linkName);
  link.innerHTML = linkText;
  div.appendChild(link);
  div.setAttribute('class', 'dish-description');
  li.appendChild(div);
  return li;
};

export default listItem;