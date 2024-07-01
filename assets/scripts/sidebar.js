document.addEventListener("DOMContentLoaded", function () {

    // Menu toggle button
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');

    header.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');

        // Sidebar positioning
        if (header) {
            const headerRect = header.getBoundingClientRect();
            sidebar.style.top = `${headerRect.bottom}px`;
        }        
    });

    // Submenu handler
    const menuItems = document.querySelectorAll('.menu-item.has-submenu');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const submenu = item.querySelector('.submenu');
            const itemRect = item.getBoundingClientRect();
            submenu.style.top = `${itemRect.top}px`;
            submenu.style.display = 'block';
        });

        item.addEventListener('mouseleave', function () {
            const submenu = item.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});