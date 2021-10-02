//Toggler Nav Widgets
let open = document.querySelector('.toggler-button.open')
let close = document.querySelector('.toggler-button.close')
let navResponsive = document.querySelector('#header-nav')

// Funções
function openNavResponsive(){
    // Alterando Toggler Buttons
    open.classList.add('sumir')
    close.classList.remove('sumir')

    // Exibindo Nav
    navResponsive.classList.remove('sumir')
}
function closeNavResponsive(){
    // Alterando Toggler Buttons
    close.classList.add('sumir')
    open.classList.remove('sumir')

    // Removendo Nav
    navResponsive.classList.add('sumir')    
}

export {openNavResponsive, closeNavResponsive, open, close}