// El objeto con las propiedade del mouse

let pm ={

    zona:  document.querySelector("#efectoMouse")

}



// El objeto con los metodos del mouse

let mm = {
    inicioMouse: function() {
        pm.zona.addEventListener("mousemove", mm.movimietoMouse)
        
    },
    movimietoMouse: function(mouse) {
        console.log(mouse.offsetX, mouse.offsetY)
        
    }

}

mm.inicioMouse();