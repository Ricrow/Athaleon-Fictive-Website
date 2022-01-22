const toggleMenu = () => {

  const menu = document.getElementById('menu');
  const navbar = document.getElementById('nav');

  menu.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active')
  })
};

toggleMenu();