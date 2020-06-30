export let scroll= () => {


let btnUp = document.getElementById('btn-subir');


btnUp.addEventListener( 'click', (e)=>{

    e.preventDefault();

let scrollToTop = window.setInterval( () => {
  let pos = window.pageYOffset;
  if (pos > 0) {
    window.scrollTo(0, pos - 20); 
  } else {
    window.clearInterval(scrollToTop);
  }
}, 10);



} );


















}