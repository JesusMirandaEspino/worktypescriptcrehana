export let menudesplegable = ()=>{

    let menuFixed = document.getElementById('nav-movil'); 
    let header = document.querySelector( 'header' );




    
window.addEventListener('scroll', () => {

    let mediaqueryList = window.matchMedia('(max-width: 768px)');
    let btnSubir = document.getElementById('btn-subir');


    if (mediaqueryList.matches) {

        menuFixed.style.display = 'none';
        btnSubir.style.marginRight = '-80px';

    }else{

        menuEjecutar();

    }



});


let menuEjecutar = () => {

  let bodyTop = window.pageYOffset;
  let headerTop = header?.offsetHeight;
  let btnSubir = document.getElementById( 'btn-subir' );
  if (bodyTop >= headerTop) {
    menuFixed.style.display = 'block';
    btnSubir.style.marginRight = '10px';
  } else {
    menuFixed.style.display = 'none';
    btnSubir.style.marginRight = '-80px';
  }

}











}