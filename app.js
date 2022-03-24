// Happy coding!

let colors= document.querySelector(".canvas");

colors.addEventListener("click", function (event) {
    /* Ejercicio Normal
    let color = event.target.id
    //console.log(event.target.id);

    document.body.style.backgroundColor = color; 
    */

    //Para que funcione el color verde (se llama diferente al color)
    let color = event.target
    document.body.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
})
