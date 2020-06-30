import {menudesplegable} from './menuDesplegable';
import { scroll } from './scroll';
import { menuPhone } from './menuphone';
// Menus
import { agentloading } from './loadmenuagent';
import {customerloading} from './loadmenucustomer';
import {registerloading} from './loadregistermenu';
import {sessionloading} from './menusesion';
//ingresos usuarios
import { getagent } from './agent';
import { getcustomer } from './customer';
import loggedin from './logeedin';
import login from './login';
import logincustomer from './logincustomer'
import logedincustomer from './logedincustomer';
// Formulario
import formulario from './formulario';


//valores usados
let menuAgent = document.getElementById('agent-login');
let menuCustomer = document.getElementById('customer-login');
let inciarAgent = document.getElementById('init-session-agent');
let iniciarCustomer = document.getElementById('init-session-customer');

let cerrarMenuAgent = () => {
    menuAgent.style.display = 'none';
}

let cerrarMenuCustomer = () => {
    menuCustomer.style.display = 'none';
}



inciarAgent!.addEventListener('click', (e) => {
    e.preventDefault;
    let idagent: string = (<HTMLInputElement>document.getElementById('idAgent')).value;
    let passwordagent: string = (<HTMLInputElement>document.getElementById('password-agent')).value;
    login(getagent()[0], { idagent, passwordagent });
    cerrarMenuAgent();
});


iniciarCustomer!.addEventListener('click', (e) => {
    e.preventDefault;
    let emailcustomer: string = (<HTMLInputElement>document.getElementById('email-customer')).value;
    let passwordcustomer: string = (<HTMLInputElement>document.getElementById('password-customer')).value;
    logincustomer(getcustomer()[0], { emailcustomer, passwordcustomer });
    cerrarMenuCustomer();
});





menuPhone();
menudesplegable();
scroll();
agentloading();
customerloading();
registerloading();
sessionloading();
loggedin();
logedincustomer();
formulario();