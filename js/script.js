/* Menu Hamburguesa */
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active1');
});

window.addEventListener("resize", function(){
    let anchoVentana = window.innerWidth;
    if (anchoVentana>=1000){
    menu.classList.remove('active1');
    };
});

/* Marcado menu */
const menuItems = document.querySelectorAll('.menu1');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(e){
        const currentItem= document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

/* Menu Experiencia */
const menuExp1 = document.getElementById('menu-exp1');
const menuA = document.getElementById('e1');
menuExp1.addEventListener('click', function () {
    menuA.classList.toggle('active2');
    menuB.classList.remove('active2');
    menuC.classList.remove('active2');
});
const menuExp2 = document.getElementById('menu-exp2');
const menuB = document.getElementById('e2');
menuExp2.addEventListener('click', function () {
    menuB.classList.toggle('active2');
    menuA.classList.remove('active2');
    menuC.classList.remove('active2');
});
const menuExp3 = document.getElementById('menu-exp3');
const menuC = document.getElementById('e3');
menuExp3.addEventListener('click', function () {
    menuC.classList.toggle('active2');
    menuA.classList.remove('active2');
    menuB.classList.remove('active2');
});


