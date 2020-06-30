
// id fotografiafull
// class contenedor de la foto fotografia
let fotografiaContainer = document.getElementById('fotografia-full');
let botonCerrarFoto = document.getElementById('cerrarfoto');
let fotoClick = document.querySelectorAll('.slide');
let fotoFull = document.getElementById( 'foto-full' );
let fotoFullImg = fotoFull.firstElementChild;




let  mostrarFotografia =  () => {
    fotografiaContainer.style.display = 'block';
};


let ocultarFotografia = ()=>{
    fotografiaContainer.style.display = 'none';
}


for (let i = 0; i < fotoClick.length; i++) {
    
    fotoClick[i].addEventListener( 'click', ()=>{
        let contendorimagen = fotoClick[i];
        
        let imagenchild = contendorimagen.firstElementChild;
       
        let imagenfoto = imagenchild.firstElementChild.src;

        fotoFullImg.src = imagenfoto;

        mostrarFotografia();
        
    

    } );


}




botonCerrarFoto.addEventListener('click', ocultarFotografia);
