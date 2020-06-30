


export let agentloading = () => {

let menuAgent = document.getElementById('agent-login');
let btnCerrarAgent = document.getElementById('btnCerrarAgent');   
let btnAgentMenu = document.getElementById('btn-agent-login');


let cerrarMenuAgent = () => {
    menuAgent.style.display = 'none';
}


let abrirMenuAgent = () => {
  menuAgent.style.display = 'block';
};

btnAgentMenu?.addEventListener('click',  () => {
        abrirMenuAgent();
btnCerrarAgent?.addEventListener('click', cerrarMenuAgent );   

});


 







}