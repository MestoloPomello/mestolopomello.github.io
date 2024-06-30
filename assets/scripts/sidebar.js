document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item.has-submenu');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = item.querySelector('.submenu');
            const itemRect = item.getBoundingClientRect();
            submenu.style.top = `${itemRect.top}px`;
            submenu.style.display = 'block';
        });

        item.addEventListener('mouseleave', function() {
            const submenu = item.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});