document.addEventListener('DOMContentLoaded',()=>{
    const buttonHamburguesa = document.querySelector('.hamburguesa')
    
    buttonHamburguesa.addEventListener('click',toggleMenu)

    function toggleMenu(){
        const menu = document.querySelector('.menu');
        menu.classList.toggle('ver')
        buttonHamburguesa.classList.toggle('close')
    }

})