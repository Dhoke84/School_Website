document.addEventListener('DOMContentLoaded', function() {
    // Search bar functionality
    const searchBar = document.querySelector('.search-bar');
    const searchInput = searchBar.querySelector('input');
    const searchIcon = searchBar.querySelector('.fa-search');
    const closeIcon = searchBar.querySelector('.fa-times');

    searchIcon.addEventListener('click', function() {
      searchBar.classList.add('expanded');
      searchInput.focus();
    });

    closeIcon.addEventListener('click', function() {
      searchBar.classList.remove('expanded');
      searchInput.blur();
    });

    // Header navigation active link functionality
    const headerNavLinks = document.querySelectorAll('.nav-items a');

    headerNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        headerNavLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Main navigation active link functionality
    const mainNavLinks = document.querySelectorAll('.main-nav .nav-link');

    mainNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNavLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
    // Image carousel functionality
    const imageCarousel = document.querySelector('.about-image-carousel');
    const images = imageCarousel.querySelectorAll('img');
    let index = 0;

    function showNextImage() {
      index = (index + 1) % images.length;
      imageCarousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
  });
    // Dropdown functionality
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');

    dropdownIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
        e.preventDefault();
        const parentLi = this.closest('li');
        const submenu = parentLi.querySelector('ul');
        const isExpanded = submenu.style.display === 'block';

        // Close all submenus
        document.querySelectorAll('.main-nav ul li ul').forEach(ul => ul.style.display = 'none');
        document.querySelectorAll('.dropdown-icon').forEach(icon => icon.classList.remove('fa-caret-up'));
        document.querySelectorAll('.dropdown-icon').forEach(icon => icon.classList.add('fa-caret-down'));

        // Toggle the current submenu
        if (!isExpanded) {
          submenu.style.display = 'block';
          this.classList.remove('fa-caret-down');
          this.classList.add('fa-caret-up');
        }
      });
    });
  });

  // scripts.js

  document.getElementById("hamburger").addEventListener("click", function() {
    var nav = document.getElementById("main-nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
  