function saludo() {
    alert ("Hola esta es mi primera Pagina Web con Bootstrap");
}
function suma() {
    // Declaramos las variables
    let A = 0;
    let B = 0; 
    let S = 0;
    
    // Solicitamos los valores
    A = parseInt(prompt("Por valor igrese el primer valor a sumar"))
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"))
    
    // Realizamos los procesos
    S = A + B; 

    // Mostramos el resultado en pantalla 
    alert("El resultado de la suma es: " + S )
}
function operaciones() {
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0; 

    A = parseInt(prompt("Ingrese el primer valor a sumar, restar, multiplicar y dividir"))
    B = parseInt(prompt("Ingrese el segundo a sumar, restar, multiplicar y dividir"))

    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B; 


    alert("El resultado de la suma es: " +  S,  "El resultado de la resta es: " + R, "El resultado de la multiplicacion es: " + M, "El resultado de la divicion es: " + D )

    
}
function mayor() {
    let N1 = 0; 
    let N2 = 0;

    N1 =  parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));

    if (N1 == N2) {
        alert("Los valores ingresados son iguales")
    } else if (N1 > N2) {
        alert("El numero mayor es " + N1)
        
    } else {
        alert("El numero mayor es " + N2)
    }
}
function menor() {
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;

    N1 = parseFloat(prompt("Ingrese el primer número"));
    N2 = parseFloat(prompt("Ingrese el segundo número"));
    N3 = parseFloat(prompt("Ingrese el tercer número"));

    if (N1 == N2 && N1 == N3) {
        alert("Los valores ingresados son iguales")
    } else if (N1 < N2 && N1 < N3) {
        alert("El número menor es: " + N1);
    } else if (N2 < N1 && N2 < N3) {
        alert("El número menor es: " + N2);
    } else {
        alert("El número menor es: " + N3);
    }
}

// El colegio A B C requiere un algoritmo en un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y siete calificaciones y este sistema, le indique si aprovo o reprobo la materia teniendo en cuenta que se aprueba si el puntaje es mayor igual a 6
function promedio() {
    alert ("Este algoritmo le hara saber si aprobo o no la materia");
    let nombre;
    let materia;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let n7 = 0;

    let prom = 0;

    nombre = prompt("Ingrese su nombre completo");
    materia = prompt("Ingrese el nombre de la asignatura");

    n1 = parseInt(prompt("Dijite la primera nota"));
    n2 = parseInt(prompt("Dijite la segunda nota"));
    n3 = parseInt(prompt("Dijite la tercera nota"));
    n4 = parseInt(prompt("Dijite la cuarta nota"));
    n5 = parseInt(prompt("Dijite la quinta nota"));
    n6 = parseInt(prompt("Dijite la sexta nota"));
    n7 = parseInt(prompt("Dijite la septima nota"));

    prom = (n1 + n2 + n3 + n4 + n5 + n6 + n7)/7;

    if(prom>=6) {
        alert ("Gracias por usar nuestra plataforma " + nombre + ", aprovo la asignatura de " + materia + ". Su promedio fue " + prom);
    } 
    else{
        alert ("Gracias por usar nuestra plataforma " + nombre + ", Usted NO aprovo la asignatura de " + materia + ". Su promedio fue " + prom);
    }
}
// Se requiere un sistema o algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equibale, euros , yenes
function conversion() {
    B1 = 0; 

    B1 = parseFloat(prompt("Por favor ingrese los dolaresa convertir"))
    
    B2 = B1 * 4119;
    B3 = B1 * 0.92;
    B4 = B1 * 145.75;

    alert("Hola, la conversion de " + B1 +  "dolar a pesos colombianos es: " + B2 + " en Euros es: " + B3 + " en yenes es " + B4 + "   Gracias por elegirnos")
}
// Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de N numero de años teniendo en cuentta que el banco paga un interes del 1.3 % mensual  
function cdt() {
    let capitalInicial = parseFloat(prompt("Ingrese el capital inicial en pesos"));
    let numeroAnios = parseInt(prompt("Ingrese el número de años"));

    let interesMensual = 0.013; // 1.3% en decimal
    let totalMeses = numeroAnios * 12;

    let capitalFinal = capitalInicial * Math.pow((1 + interesMensual), totalMeses);

    alert("Después de " + numeroAnios + " años, su capital inicial de $" + capitalInicial + " habrá crecido a $" + capitalFinal.toFixed(2) + " con un interés del 1.3% mensual.");
}


// capturamos en una constante el elemento html que deseamos manipular
function circulo() {
    const figura=document.getElementById("figura");
    // A este elemento html le agregamos la clase circulo
    figura.classList.toggle("circulo");
}

function moveTop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function panelSuperior() {
    const panel = document.getElementById("panel-superior");
    panel.classList.toggle("activ");
}

function horizontal() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("hor");
}

function vertical() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("ver");
}

function gif() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("gift");
}

function moveRight() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("right");
}

function moveLeft() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function moveBottom() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("bot");
}

function degradado() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("deg");
}

function rombo() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("rom");
}

function triangulo() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("triang");
}
