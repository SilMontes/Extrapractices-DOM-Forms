(function(){
    //variables

    var lista=document.getElementById("lista"),
        tareaInput=document.getElementById("tareaInput"),
        btnNuevaTarea=document.getElementById("btn-agregar");

    //funciones
    var agregarTarea = function(){ 
        //el valor de tarea será lo que se digite en el input tareaInput
        var tarea=tareaInput.value,
        nuevaTarea=document.createElement("li"),    
        //crear una li que tendra un a, a su vez, el a tendra el valor de tarea
        enlace=document.createElement("a"),
        contenido=document.createTextNode(tarea); 

       //validación para asegufrarnos de que cuando se de click no se agregue una tarea vacia
        if(tarea === ""){    
            tareaInput.setAttribute("placeholder", "Este espacio no puede quedar en blanco"); 
            //vamos a cambiar la clase actual del input por la clase error que configuramos en CSS
           tareaInput.className="error";
            //esto inica que en caso de que el input este vacion, la funcion no se va aejecutar más, se detendrá hasta este punto.
            return false;
        }
        //si todo esta bien agregamos tarea al elemento a, luego agregamos el elemento a en la li. Finalmente, agregamos el li a la ul.
       enlace.appendChild(contenido);  //tarea se agrega a A
       //al enace le agregamos un atributo href para que sea clickable
       enlace.setAttribute("href", "#");
       nuevaTarea.appendChild(enlace); //a se agraga a li
       lista.appendChild(nuevaTarea); //la li se agrega a la ul
        //al agregar la tarea, el input se limpiará automaticament
        tareaInput.value="";

        for (var i=0; i<lista.children.length;i++){
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        })
    }

        };
    var comprobarInput=function(){
        //cambia de mesaje incorrecto a mensaje inicial al volver a dar click
        //al dar click se agrgará ese atributo
        tareaInput.className="";
        tareaInput.setAttribute("placeholder", "Agregar tarea");
    };
    var eliminarTarea=function(){
       this.parentNode.removeChild(this);
    };

    //eventos
    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //Comprobar input, que no este vacio
    tareaInput.addEventListener("click", comprobarInput);

    //ciclo para las li, con el objetivo de borrar algunos elementos li   accedo a los hijos de la ul, es decir, accedo a las li
    for (var i=0; i<lista.children.length;i++){
        lista.children[i].addEventListener("click", eliminarTarea)
    }

}());