// Happy coding!

let colors= document.querySelector(".canvas");

colors.addEventListener("click", function (event) {
    /* Ejercicio Normal
    let color = event.target.id
    //console.log(event.target.id);

    document.body.style.backgroundColor = color; 
    */

    //Para que funcione el color verde (se llama diferente al color)
    document.body.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;

    /* if (color == "micolor") {
        document.body.style.backgroundColor = 'rgba(77, 138, 85, 0.8)';             
    } */
})
