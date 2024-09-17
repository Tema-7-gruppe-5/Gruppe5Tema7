document.getElementById('burger-menu').addEventListener('click', function() {
    const mainMenu = document.querySelector('.main-menu');
    
    mainMenu.classList.toggle('active'); // Toggler visningen af menuen på små skærme
});
