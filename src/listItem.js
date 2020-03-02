const listItem = (nameClass, linkName, linkText) => {
  const li = document.createElement('li');
  li.classList.add(nameClass);
  const link = document.createElement('a');
  const div = document.createElement('div');
  link.href = '#';
  link.id = linkName;
  link.textContent = linkText;
  div.append(link);
  li.append(div);
  return li;
};

export default listItem;
