export let menuPhone = () =>{


let navPhone = document.getElementById('btn-burger');
let menuNav = document.getElementById('menu-nav-phone');  
let elementosNav = document.querySelectorAll('.elementosNav');
let menuActivo:boolean = false;
    
console.log( elementosNav );

navPhone?.addEventListener( 'click', () => {

        menuNav?.style.display = 'block';
        


    for (let i = 0; i < elementosNav.length; i++) {
      elementosNav[i].addEventListener('click', ocultar);
    }




    } );

         let ocultar =  () => {
            menuActivo = false;
            menuNav?.style.display = 'none';
        }



}


