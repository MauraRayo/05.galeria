/* 
    EL OBJETO CON LAS PROPIEDADES DEL SCROLL

*/


let ps = {
    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    headerScroll: document.querySelector("header")
 
  
}


/*
    EL OBJETO CON LOS MÉTODOS DEL SCROLL 
 */


let ms = {
    incioScroll: function () {
     document.addEventListener("scroll", ms.efectoParallax);
        
    },

    efectoParallax: function(){
       ps.posicionScroll= window.pageYOffset;
       if (ps.posicionScroll > 100) {
        ps.headerScroll.style.position = "fixed";
        ps.headerScroll.style.zIndex= 10;
            
       }else{
        ps.headerScroll.style.position = "relative";
        ps.headerScroll.style.zIndex= 0;

       }

       if (ps.posicionScroll > ps.cajaScroll.offsetTop-200) {
        
         for(let i = 0; i < ps.articulos.length; i++){
            ps.articulos[i].style.marginLeft = "0";
         }}
         else{
            for (let i = 0; i < ps.articulos.length; i++) {
                ps.articulos[i].style.marginLeft= ps.posicionScroll/25 -100 + "%";
                
            }

        } 
    }

}


ms.incioScroll();