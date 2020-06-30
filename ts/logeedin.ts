import { getagent } from './agent';

export default () => {

    if (localStorage.userName === 'slan48' ) {



        document.getElementById('login-user')!.innerHTML = ` <h2> ${getagent()[0].useridagent} </h2> `;
        document.getElementById('log1')!.innerHTML = ` <p> ${getagent()[0].useridagent} </p> `;
        document.getElementById('log2')!.innerHTML = ` <p> Agent </p> `;
        document.getElementById('log3')!.innerHTML = ` <p>Sesion <span id="menu-register" > Close </span> </p> `;

        let closeSesionAgent = document.getElementById( 'menu-register' );    


        closeSesionAgent?.addEventListener( 'click', (e) => {

            e.preventDefault();
            localStorage.clear();
            window.location.reload();

        } );


    }


}