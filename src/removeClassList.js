const removeClassList = () => {
  const containers = Array.from(document.querySelectorAll('.nav-tab div'));
  containers.forEach((div) => {
    div.firstChild.classList.remove('selected');
  });
};

export default removeClassList;
