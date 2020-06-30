export let customerloading = () => {

    let menuCustomer = document.getElementById('customer-login');
    let btnCerrarCustomer = document.getElementById('btnCerrarCustomer');   
    let btnCustomerMenu = document.getElementById('btn-customer-login');


    let cerrarMenuCustomer = () => {
       menuCustomer.style.display = 'none';
    }


    let abrirMenuCustomer = () => {
    menuCustomer.style.display = 'block';
    };

    btnCustomerMenu?.addEventListener('click', () => {
      abrirMenuCustomer();
      btnCerrarCustomer?.addEventListener('click', cerrarMenuCustomer);
    });



}



