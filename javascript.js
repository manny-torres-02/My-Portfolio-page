alert("hello");

/* Toggle functionality for the menu Icon */
    function classToggle() {
    const navs = document.querySelectorAll('.Navbar_Items')

    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));
};
/* Event listener to listen for the query selector   */
document.querySelector('.Navbar_Link-toggle').addEventListener('click', classToggle); 


