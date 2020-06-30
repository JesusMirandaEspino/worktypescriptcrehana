"use strict";
//Propiedades afecto
var propFondoMover = {
    seccion: document.querySelector('#holidays'),
    recorrido: 0,
    limite: 0,
};
//Metodo efecto
var metFondoMover = {
    iniciar: function () {
        window.addEventListener('scroll', metFondoMover.bajar);
    },
    bajar: function () {
        propFondoMover.recorrido = window.pageYOffset;
        propFondoMover.limite = propFondoMover.seccion.offsetTop + propFondoMover.seccion.offsetHeight;
        if (propFondoMover.recorrido >
            propFondoMover.seccion.offsetTop - window.outerHeight
            && propFondoMover.recorrido <= propFondoMover.limite) {
            propFondoMover.seccion.style.backgroundPositionY =
                (propFondoMover.recorrido - propFondoMover.seccion.offsetTop) / 1.5 +
                    'px';
        }
    }
};
metFondoMover.iniciar();
/*
 let  backgroundMovil = (seccion: HTMLElement, recorrido: number)=>
{
    recorrido = window.pageYOffset;
    let limite:number = seccion.offsetTop + seccion.offsetHeight;

    if ( recorrido >
      seccion.offsetTop - window.outerHeight
      && recorrido <= limite) {

      seccion.style.backgroundPositionY =
        (recorrido - seccion.offsetTop) / 1.5 +
        'px';
    }

  }


*/
/*

export class backgoundAttachment {
         constructor(
           public seccion: HTMLElement,
           public recorrido: number,
           public limite?: number
         ) {}
         metMover(seccion: HTMLElement, recorrido:number) {
           
           this.seccion = seccion;
           this.recorrido = recorrido;
           
            this.limite = this.seccion.offsetTop + this.seccion.offsetHeight;

           if (
             this.recorrido > this.seccion.offsetTop - window.outerHeight &&
             this.recorrido <= this.limite
           ) {
             this.seccion.style.backgroundPositionY =
               (this.recorrido - this.seccion.offsetTop) / 1.5 + 'px';
           }
         }
        

       }

       */ 
