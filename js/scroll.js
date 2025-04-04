/* 
    EL OBJETO CON LAS PROPIEDADES DEL SCROLL

*/


let ps = {
    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    headerScroll: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null, 
    destinoScroll: 0,
    padding:  0
 
  
}


/*
    EL OBJETO CON LOS MÉTODOS DEL SCROLL 
 */


let ms = {
    incioScroll: function () {
     document.addEventListener("scroll", ms.efectoParallax)
     for(let i =0; i < ps.botonera.length; i++){
         ps.botonera[i].addEventListener("click", ms.desplazamiento)
        }
        
    },


    efectoParallax: function(){
       ps.posicionScroll= window.pageYOffset;
       if (ps.posicionScroll > 100) {
        ps.headerScroll.style.position = "fixed";
        ps.headerScroll.style.zIndex= 10;
        ps.padding = 80;
            
       }else{
        ps.headerScroll.style.position = "relative";
        ps.headerScroll.style.zIndex= 0;
        ps.padding = 180;

       }

       if (ps.posicionScroll > ps.cajaScroll.offsetTop-200) {
        
         for(let i = 0; i < ps.articulos.length; i++){
            ps.articulos[i].style.marginLeft = "0";
         }}
         else{
            for (let i = 0; i < ps.articulos.length; i++) {
                ps.articulos[i].style.marginLeft= ps.posicionScroll/22.8 -100 + "%";
                
            }

        } 
    },
    desplazamiento: function(ruta){
        ruta.preventDefault();

      ps.ruta = ruta.target.getAttribute("href");
      
      ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-ps.padding

      ps.intervalo = setInterval(function(){
        if(ps.posicionScroll < ps.destinoScroll){
            ps.posicionScroll += 100;

            if(ps.posicionScroll >= ps.destinoScroll){
                ps.posicionScroll = ps.destinoScroll;
                clearInterval(ps.intervalo)
            }

        }else{
            ps.posicionScroll -= 100;

            if(ps.posicionScroll <= ps.destinoScroll){
                ps.posicionScroll = ps.destinoScroll;
                clearInterval(ps.intervalo)
            }
        }



         window.scrollTo(0,  ps.posicionScroll);

      }, 50)


    }

}


ms.incioScroll();