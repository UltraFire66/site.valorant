const menuDiv = document.getElementById('menu-mobile');

const btnAnimar = document.getElementById('btn-menu');

const slider = document.getElementById('slider');

menuDiv.addEventListener('click',animarMenu);

function animarMenu(){

    menuDiv.classList.toggle('abrir');
    btnAnimar.classList.toggle('ativar');
    slider = document.getElementById('aberto');
}