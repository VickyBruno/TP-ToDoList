const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e)=>{

    e.preventDefault(); // Evita que se puda seguir usando el formulario, hasta que no temine la funcion.

    const text = input.value; //guarda en una variable el contenido del input

    if (text !== ""){
        
        const li = document.createElement('li'); //tengo que crear los elementos queno estan en el html, para que contenga la informacion.
        const p = document.createElement('p');   // Por un lado, que etiqueta los contiene "li", por el otro el tipo de dato "p".
        
        p.textContent = text;  //Le asigno a "p", el valor ingresado por el input.

        li.appendChild(p); // Le asigno el contenido de "p" al "li"
        ul.appendChild(li); // le cargo el "li" al ul - Muy importante el orden que voy agregando
        li.appendChild(addDeleteBtn()); // le creo un boton, solo cuando ya aparece la "li" (seria para borrar la tarea)

        input.value = ""; // Vuelve a poner el input en blanco
        empty.style.display = "none"; //Oculta cartel de "no tareas pendientes"

    }

})

//Creo la funcion para elimnar la "li". 
function addDeleteBtn () {
    
    const deleteBtn = document.createElement("button"); // Creo el boton

    deleteBtn.textContent = "x"; // El boton tiene que tener algun contenido
    deleteBtn.className = "btn-delete"  // Le asignamos una clase y después podria trabajarlo esteicamente desde el css.

    deleteBtn.addEventListener("click", (e)=>{

        const item = e.target.parentElement;

        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if(items.length === 0){
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}