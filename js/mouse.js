// El objeto con las propiedade del mouse

let pm ={

    zona:  document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure "),
    mouseX: 0,
    mouseY: 0,
    horizontal: true,
    vertical : false,

}



// El objeto con los metodos del mouse

let mm = {
    inicioMouse: function() {
        pm.zona.addEventListener("mousemove", mm.movimietoMouse);

        for (let i = 0; i < pm.figuras.length; i++) {
                   
            pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' +i+ '.png">';
            pm.figuras[i].style.zIndex= -i;
            
        }
        // capturar la altura
        setTimeout(function() {
          pm.zona.style.height =  pm.figuras[0].childNodes[0].height +"px";
            
        },100)
    },
    movimietoMouse: function(mouse) {
        pm.mouseX = -mouse.offsetX;
        pm.mouseY = mouse.offsetY;

        for (let i = 0; i < pm.figuras.length; i++) {

            if (pm.horizontal) {
                pm.figuras[i].style.left= pm.mouseX/(i*100+50) + "%";                
            }
            if(vertical){

                pm.figuras[i].style.Top=  pm.mouseY/(i*100+50) + "%";
            }
        } 
    }

}

mm.inicioMouse();