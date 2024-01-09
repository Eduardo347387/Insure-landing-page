document.addEventListener('DOMContentLoaded',()=>{
    const buttonHamburguesa = document.querySelector('.hamburguesa')
    
    buttonHamburguesa.addEventListener('click',toggleMenu)

    function toggleMenu(){
        const menu = document.querySelector('.menu');
        
        menu.style.display = (menu.style.display === 'flex') ? 
        'none': 
        'flex';

        buttonHamburguesa.style.backgroundImage = (menu.style.display === 'flex') ?
        'url("../images/icon-close.svg")' :
        '';
    }

})