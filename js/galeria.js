// Objeto  con las propiedad de la galeria

let pg ={
    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom: document.querySelector("body"),
    lightbox: null,
    modal: null,


}



// Objeto con los metodos de la galeria

let mg = {

    inicioGaleria: function() {
        for (let i = 0; i < pg.imgGaleria.length; i++) {
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen);
            
            
        }
        
    },

    capturaImagen: function(img) {
        pg.rutaImagen = img.target;
        mg.lightbox(pg.rutaImagen);
        
    },

    lightbox: function (img) {
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
        pg.lightbox = document.querySelector("#lightbox");
        pg.lightbox.style.width = "100%";
        pg.lightbox.style.height = "100%";
        pg.lightbox.style.position = "fixed";
        pg.lightbox.style.zIndex = "10";
        pg.lightbox.style.background = "rgba(0, 0, 0, .8)";
        pg.lightbox.style.top = "0";
        pg.lightbox.style.letfs = "0";


        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal"),
        pg.modal.innerHTML = img.outerHTML;


        
    }

}

mg.inicioGaleria();