export default () => {

    let newId: string = (<HTMLInputElement>document.getElementById('new-id')).value;
    let newEmail: string = (<HTMLInputElement>document.getElementById('new-email')).value;
    let newPassword: string = (<HTMLInputElement>document.getElementById('new-password')).value;
    let bntLoginRegister = document.getElementById('btn-login-register');
    let menuRegister = document.getElementById('register');
    let allinputs = document.querySelectorAll('.input-register');
    let allLabels = document.querySelectorAll( '.label-register' );
    let newCustomerError = document.getElementById('new-customer-error');
    let btnCerrarCustomerError = document.getElementById('btnCerrarCustomerError');

let cerrarRegister = () => {
    menuRegister?.style.display = 'none';
}


let openError = () => {
    newCustomerError?.style.display= 'block';
}


let closeError = () => {
        newCustomerError?.style.display = 'none';
}


let validar = () => {
  

    for (let i = 0; i < allinputs.length; i++) {

   
        
        if (allinputs[i].value == ''){

                allLabels[i]!.innerText = ` Please Your Name ${allinputs[i].name} `;
                      console.log( allinputs[i] );
        }else{
                           
                allLabels[i]!.innerText = ` ${allinputs[i].name} `;                      
        }
        
        if (allinputs[0].value >= 3 && allinputs[1].value >= 3 && allinputs[2].value >= 3 ){

            

            allLabels[i]!.innerText = ` ${allinputs[i].name} `;
            allinputs[1]!.innerText = 'renderText'; 
 
            cerrarRegister();
            openError();
        }

    }
}


bntLoginRegister?.addEventListener( 'click', () => {

    validar();
    

} );


btnCerrarCustomerError?.addEventListener('click', closeError );













}