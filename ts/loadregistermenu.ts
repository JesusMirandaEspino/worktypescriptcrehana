export let registerloading = () => {
  let menuRegister = document.getElementById('register');
  let btnCerrarRegister = document.getElementById('btn-cerrar-menu-register');
  let btnRegisterMenu1 = document.getElementById('newMember');
  let btnRegisterMenu2 = document.getElementById('menu-register');

  let cerrarMenuCustomer = () => {
   menuRegister.style.display = 'none';
  };

  let abrirMenuCustomer = () => {
    menuRegister.style.display = 'block';
  };

  btnRegisterMenu1?.addEventListener('click', () => {
    abrirMenuCustomer();
    btnCerrarRegister?.addEventListener('click', cerrarMenuCustomer);
  });

  btnRegisterMenu2?.addEventListener('click', () => {
    abrirMenuCustomer();
    btnCerrarRegister?.addEventListener('click', cerrarMenuCustomer);
  });

};
