const header = (parent) => {
  parent.innerHTML = `
    <header> 
      <nav>
        <ul>
          <li class="nav-tab">
            <a href="#">Home</a>          
          </li>
          <li class="nav-tab">
            <a href="#">Menu</a>          
          </li>
          <li class="nav-tab">
            <a href="#">Contact</a>          
          </li>
        </ul>
      </nav>
    </header>
  `;
};

export default header;