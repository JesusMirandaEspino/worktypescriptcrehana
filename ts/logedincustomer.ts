import { getcustomer } from './customer';


export default () => {


    if (localStorage.userName === 'jesus@crehana') {

        document.getElementById('login-user')!.innerHTML = ` <h2> ${getcustomer()[0].userEmailCustomer} </h2> `;
        document.getElementById('log1')!.innerHTML = ` <p> ${getcustomer()[0].userPasswordCustomer} </p> `;
        document.getElementById('log2')!.innerHTML = ` <p> Customer </p> `;
        document.getElementById('log3')!.innerHTML = ` <p>Sesion <span id="menu-register" > Close </span> </p> `;

        let closeSesionCustomer = document.getElementById('menu-register');
        closeSesionCustomer?.addEventListener('click', (e) => {

            e.preventDefault();
            localStorage.clear();
            window.location.reload();

        });
    }
}