const toggleMenu = () => {

  const menu = document.getElementById('menu');
  const navbar = document.getElementById('nav');

  menu.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active')
  })
};

const upArrow = () => {

  const upButton = document.getElementById('home-arrow');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight && window.innerWidth > 768) {
      upButton.style.display = 'block';
    } else {
      upButton.style.display = 'none';
    }
  })
}

toggleMenu();
upArrow();