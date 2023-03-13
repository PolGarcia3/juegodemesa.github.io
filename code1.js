let contadorExterno = 0;
let resultados = [];
let seleccionado;
let x;

function reiniciar() {
    location.replace('index.html');
}

function mostrarMusculos() {
    const musculos = ["Brazo", "Espalda", "Pecho", "Pierna"];

    const resultado = [];

    const brazos = ["Polea triceps", "Curl martillo", "Curl de biceps", "Pres militar"];

    const espalda = ["Dominadas", "Jalon al pecho", "Remo", "Remo de barra"];

    const pecho = ["Polea", "Mancuerna", "Pres banca", "Inclina"];

    const pierna = ["Prensa", "Peso muerto", "Sentadilla", "Hip thrust"];

    const barios = ["Burpies", "Pajaro"];

    const aleatorio1 = Math.floor(Math.random() * musculos.length);

    if (x === "Brazo") {
        resultado.push(brazos[aleatorio1]);

        const aleatorio2 = Math.floor(Math.random() * 2);
        resultado.push(barios[aleatorio2]);

        const aleatorio3 = Math.floor(Math.random() * musculos.length);
        resultado.push(espalda[aleatorio3]);

        if (aleatorio3 == aleatorio1) {
            const aleatorio3 = Math.floor(Math.random() * 2);
            if (aleatorio3 == aleatorio1) {
                const aleatorio3 = Math.floor((Math.random() * 3) + 1);

                resultado.push(brazos[aleatorio3]);
            } else {
                resultado.push(brazos[aleatorio3]);
            }
        } else {
            resultado.push(brazos[aleatorio3]);
        }

        resultado.push(pierna[aleatorio3]);
        resultado.push(pecho[aleatorio3]);
    } else if (x === "Espalda") {
        resultado.push(espalda[aleatorio1]);

        const aleatorio2 = Math.floor(Math.random() * 2);
        resultado.push(barios[aleatorio2]);

        const aleatorio3 = Math.floor(Math.random() * musculos.length);
        resultado.push(brazos[aleatorio3]);
        resultado.push(pecho[aleatorio3]);

        if (aleatorio3 == aleatorio1) {
            const aleatorio3 = Math.floor(Math.random() * 2);
            if (aleatorio3 == aleatorio1) {
                const aleatorio3 = Math.floor((Math.random() * 3) + 1);
                resultado.push(espalda[aleatorio3]);
            } else {
                resultado.push(espalda[aleatorio3]);
            }
        } else {
            resultado.push(espalda[aleatorio3]);
        }

        resultado.push(pierna[aleatorio3]);
    } else if (x === "Pierna") {
        resultado.push(pierna[aleatorio1]);

        const aleatorio2 = Math.floor(Math.random() * 2);
        resultado.push(barios[aleatorio2]);

        const aleatorio3 = Math.floor(Math.random() * musculos.length);
        resultado.push(pecho[aleatorio3]);

        if (aleatorio3 == aleatorio1) {
            const aleatorio3 = Math.floor(Math.random() * 2);
            if (aleatorio3 == aleatorio1) {
                const aleatorio3 = Math.floor((Math.random() * 3) + 1);
                resultado.push(pierna[aleatorio3]);
            } else {
                resultado.push(pierna[aleatorio3]);
            }
        } else {
            resultado.push(pierna[aleatorio3]);
        }

        resultado.push(brazos[aleatorio3]);
        resultado.push(espalda[aleatorio3]);
    } else {
        resultado.push(pecho[aleatorio1]);

        const aleatorio2 = Math.floor(Math.random() * 2);
        resultado.push(barios[aleatorio2]);

        const aleatorio3 = Math.floor(Math.random() * musculos.length);

        if (aleatorio3 == aleatorio1) {
            const aleatorio3 = Math.floor(Math.random() * 2);
            if (aleatorio3 == aleatorio1) {
                const aleatorio3 = Math.floor((Math.random() * 3) + 1);
                resultado.push(pecho[aleatorio3]);
            } else {
                resultado.push(pecho[aleatorio3]);
            }
        } else {
            resultado.push(pecho[aleatorio3]);
        }

        resultado.push(pierna[aleatorio3]);

        resultado.push(espalda[aleatorio3]);
        resultado.push(pecho[aleatorio3]);
        resultado.push(brazos[aleatorio3]);
    }

    const personajes = ["Cbum", "Analiscruz", "Joan Pradells", "LeanBeef Patty", "Andoni"]

    var m = "Orden de jugadores: "
    resultado.push(m.fontcolor("blue"));
    for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * (5 - i));
        resultado.push((i + 1) + "- " + personajes[random]);
        console.log(personajes);
        personajes[random] = personajes[5 - i];
    }

    return resultado;
}


const boton = document.querySelector("#mostrarMusculos");
boton.addEventListener("click", function() {
    if (contadorExterno < 3) {
        if (resultados.length === 0) {
            seleccionado = Math.floor(Math.random() * 5);
            const mensaje = `Evento: ${contadorExterno + 1}. Ronda: `;
            let contadorInterno = 0;

            const musculos = ["Brazo", "Espalda", "Pecho", "Pierna"];
            const aleatorio = Math.floor(Math.random() * musculos.length);
            x = musculos[aleatorio];

            // Swal.fire({
            //     title: `Evento: ${contadorExterno + 1}`,
            //     html: 'Preparados para jugar',
            //     timer: 3000,
            //     timerProgressBar: true,
            //     didOpen: () => {
            //         Swal.showLoading()
            //         const b = Swal.getHtmlContainer().querySelector('b')
            //         timerInterval = setInterval(() => {
            //             b.textContent = Swal.getTimerLeft()
            //         }, 100)
            //     },
            //     willClose: () => {
            //         clearInterval(timerInterval)
            //     }
            // }).then((result) => {
            //     if (result.dismiss === Swal.DismissReason.timer) {
            //         console.log('I was closed by the timer')
            //     }
            // })


            while (contadorInterno < 4) {

                if (contadorInterno == 3) {
                    resultados.push(mensaje + (contadorInterno + 1) + "\n", " Maquinas: " + mostrarMusculos().join(" , "));
                    resultados.push("Músculo: " + x);
                } else {
                    resultados.push(mensaje + (contadorInterno + 1) + "\n", " Maquinas: " + mostrarMusculos().join(" , "));
                }
                contadorInterno++;
            }
        }

        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = resultados.shift() + "<br>";

        if (resultados.length === 0) {
            contadorExterno++;
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'FIN DEL JUEGO',
            text: "",
            showCancelButton: true,
            confirmButtonColor: '',
            cancelButtonColor: '',
            cancelButtonText: 'Atrás',
            confirmButtonText: '<a style="text-decoration:none;color:white;" href="index.html">Volver a jugar</a>'
        }).then((result) => {
            if (result.isConfirmed) {
                location.replace('index.html');
            }
        })
    }
});