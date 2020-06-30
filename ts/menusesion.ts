export let sessionloading = () => {

    let menuSession = document.getElementById('sesion');
    let btnCerrarSession = document.getElementById('btn-cerrar-menu-session');   
    let btnSessionMenu = document.getElementById('btn-menu-sesion');
    let agentbntopen = document.getElementById('agent-btn-open');
    let customerbntopen = document.getElementById('customer-btn-open');
    let menuAgent = document.getElementById('agent-login');
    let btnCerrarAgent = document.getElementById('btnCerrarAgent');
    let menuCustomer = document.getElementById('customer-login');
    let btnCerrarCustomer = document.getElementById('btnCerrarCustomer');

    
    let cerrarMenuCustomer = () => {
      menuCustomer.style.display = 'none';
    };

    let abrirMenuCustomer = () => {
      menuCustomer.style.display = 'block';
    };

    let cerrarMenuAgent = () => {
      menuAgent.style.display = 'none';
    };

    let abrirMenuAgent = () => {
      menuAgent.style.display = 'block';
    };


    let cerrarMenuSession = () => {
       menuSession.style.display = 'none';
    }


    let abrirMenuSession = () => {
    menuSession.style.display = 'block';
    };

    btnSessionMenu?.addEventListener('click', () => {
      abrirMenuSession();
      btnCerrarSession?.addEventListener('click', cerrarMenuSession);
    });


    agentbntopen?.addEventListener( 'click', () => {

        cerrarMenuSession();
        abrirMenuAgent();
        btnCerrarAgent?.addEventListener('click', cerrarMenuAgent);
           
    }  );


        customerbntopen?.addEventListener('click', () => {
          cerrarMenuSession();
          abrirMenuCustomer();
          btnCerrarCustomer?.addEventListener('click', cerrarMenuCustomer);
        });


 









    

}