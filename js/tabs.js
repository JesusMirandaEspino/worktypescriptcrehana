let tabSelection = document.querySelectorAll('#tabs-selection a');
let textoSelecionado = document.querySelectorAll('.texto-seleccionado');

console.log(tabSelection);




let activarTabSelection = () => {

}



    for (let i = 0; i < tabSelection.length; i++) {

        tabSelection[i].addEventListener( 'click', (e) =>{
            e.preventDefault();

    for (let i = 0; i < tabSelection.length; i++) {
        tabSelection[i].className = '';
    }

    for (let i = 0; i < tabSelection.length; i++) {
        textoSelecionado[i].className = 'col-full-8 col-smarth-11 col-tab-small-11 col-tablet-11 col-11 col-tab-big-11 texto-seleccionado';
    }

    texto = textoSelecionado[i];
    seleccionado = tabSelection[i];
    seleccionado.className = 'activo';
    texto.className = 'col-full-8 col-smarth-11 col-tab-small-11 col-tablet-11 col-11 col-tab-big-11 texto-seleccionado  activo';
    
    
    });


   
    }



