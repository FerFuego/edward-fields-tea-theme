// document.addEventListener("DOMContentLoaded", function() {
//     if (window.innerWidth < 770) {
//         jQuery('.copilot-descubre-section .custom-flex-layout__inner').slick({
//             autoplay: true,
//             dots: true,
//             infinite: true,
//             speed: 500,
//             fade: true,
//             cssEase: 'linear',
//         });
//     }
// }); 

//SI SE ACTIVA EL CROSS-SELL DESCOMENTAR ESTE CODIGO
//
// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => {
//         const upsell = document.querySelector('[data-essential-upsell-element="container"]');
//         // const target = document.querySelector('.product__info-wrapper'); // Ajusta el selector al lugar donde quieras ponerlo
//         const accordions = document.querySelectorAll('.product__accordion');
//         const lastAccordion = accordions[accordions.length - 1];
      
//         // if (upsell && lastAccordion) {
//         //   lastAccordion.appendChild(upsell); 
//         // }
//         if (upsell && lastAccordion) {
//             upsell.classList.add('copilot-upsell-block');
//             lastAccordion.insertAdjacentElement('afterend', upsell);
//         }
//     }, 1000);
// });
