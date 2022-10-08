// Clase creada con su constructor , con el metodo agregarId para cuando el usuario agrege un juego se le asigne un ID

class VideoJuego {
    constructor(titulo, anio, genero, desarrollador, id) {

        this.titulo = titulo;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.desarrollador = desarrollador;
        this.id = id;
    }

    agregarId(array) {
        this.id = array.length;
    }

};


// base de datos hardcodeada 

const videoJuegos = [

    new VideoJuego('Age Of Empire ', 1999, 'Estrategia', 'Forgotten Empires, Tantalus Media, Wicked Witch Software', 1),
    new VideoJuego('Warcraft 3', 2002, 'Estrategia', 'Blizzard Entertainment', 2),
    new VideoJuego('Anno 1602', 1998, 'Estrategia', 'Ubisoft', 3),
    new VideoJuego('Fifa 98', 1997, 'Deportes', ' Electronic Arts', 4),
    new VideoJuego('NBA live 98', 1997, 'Deportes', ' Electronic Arts', 5),
    new VideoJuego('TOCA 2 Touring Cars', 1998, 'Simulacion', 'Codemasters', 6),
    new VideoJuego('Colin McRae Rally 2.0', 2000, 'Simulacion', 'Codemasters', 7),
    new VideoJuego('Counter-Strike 1.6', 2003, 'Shooter', 'Valve Corporation, Turtle Rock Studios', 8),
    new VideoJuego('Call Of Duty 2', 2005, 'Shooter', ' Infinity Ward, Aspyr Media', 9),
    new VideoJuego('GTA 2', 1999, 'Acción , Aventura', 'Rockstar North, Rockstar Lincoln', 10)

];

// corta ciclos

let continuar = true;

while (continuar) {

    //  El usuario elije que opcion va a elegir para interactuar con la app

    let opcion = parseInt(prompt('Bienvenido a la App de Video Juegos \n Ingrese: \n 1-Agregar un nuevo juego \n 2-Buscar un juego por titulo \n 3-Ordenar por año \n 4-Ordernar por titulo \n 5-Buscar por genero \n 9-Salir '));

    if (opcion == 9) {
        continuar = false;
        break

    }



    switch (opcion) {

    // En el caso 1 el usuario ingresa el nombre , año , genero , y desarrolador del video juego , este al fin del caso se agrega a el array de objetos video juegos y se le asigna un ID

        case 1: {
            let nuevoVideoJuego = prompt('Ingrese el titulo, año, genero, desarrollador separados por un # ')

            let info = nuevoVideoJuego.split('#');
            console.log(info);

            let juegoNuevo = new VideoJuego(info[0], info[1], info[2], info[3]);
            videoJuegos.push(juegoNuevo);
            juegoNuevo.agregarId(videoJuegos);

            break;


        }


    // En el caso 2 se le pide al usuario que ingrese el nombre del juego , pasamo todos los titulos del juego a minuscula con toUpperCase() y usamos la funcion inculudes para ver si lo que el usuario escribio se encuentra en el array de video Juegos


        case 2: {

            let juegoBuscado = prompt('Ingrese el nombre del juego');

            let filtro = videoJuegos.filter((videoJuego) => videoJuego.titulo.toUpperCase().includes(juegoBuscado.toUpperCase()));

            if (filtro.length == 0) {
                alert('El juego no se encuentra disponible');
            } else {
                let juegoEncontrado = filtro.map((filtro) => filtro.titulo);

                alert(`El juego ${juegoEncontrado} se encuentra en la lista`);


            }

            break;
        }

// En el caso 3 se hace una copia del array video juegos , ya que vamos a usar una funcion que destuye el orden del array con la funcion slice() luego se le pide al usuario que ingrese la opcion 1 o 2 para ordenar segun el año los juegos. 
        case 3: {

            let copiaArray = videoJuegos.slice();

            let opcion = parseInt(prompt('Ingrese \n 1 De mas nuevo a mas a viejo \n  2 De mas viejo a mas nuevo'));

            if (opcion == 1) {
                let deMasNuevoAMasViejo = copiaArray.sort((a, b) => a.anio - b.anio);
                alert((deMasNuevoAMasViejo.map((deMasNuevoAMasViejo) => deMasNuevoAMasViejo.titulo + ' : ' + deMasNuevoAMasViejo.anio)).join('\n'));

            } else if (opcion == 2) {
                let deMasViejoAMasNuevo = copiaArray.sort((a, b) => b.anio - a.anio);
                alert((deMasViejoAMasNuevo.map((deMasViejoAMasNuevo) => deMasViejoAMasNuevo.titulo + ' : ' + deMasViejoAMasNuevo.anio)).join('\n'));

            } else {
                alert('Usted a ingresado una opcion no valida');
            }

            break;

        }

//  En el caso 4 se hace una copia del array video juegos , ya que vamos a usar una funcion que destuye el orden del array con la funcion slice() se hace algo similar al caso 3 pero este ordena por codigo ASCCI

        case 4: {
            let copiaArray = videoJuegos.slice();
            let ordenarPorTitulo = parseInt(prompt('Ingrese \n 1 Si quiere ordenar de A a Z \n 2 Si quiere ordenar de Z a A'));


            if (ordenarPorTitulo == 1) {
                let ordenadoDeAaZ = copiaArray.sort((a, b) => a.titulo.localeCompare(b.titulo));

                alert((ordenadoDeAaZ.map((ordenadoDeAaZ) => ordenadoDeAaZ.titulo)).join('\n'));

            } else if (ordenarPorTitulo == 2) {
                let ordenadoDeZaA = copiaArray.sort((a, b) => b.titulo.localeCompare(a.titulo));
                alert((ordenadoDeZaA.map((ordenadoDeZaA) => ordenadoDeZaA.titulo)).join('\n'));



            } else {
                alert('Usted a ingresado una opcion no valida')
            }


            break;

        }

// En el caso 5 le pedimos al usuario que ingrese el genero que desea encontrar y se realiza un filtro similar al del titulo

        case 5: {
            let generoBuscado = prompt('Ingrese del genero');

            let filtro = videoJuegos.filter((videoJuego) => videoJuego.genero.toUpperCase().includes(generoBuscado.toUpperCase()));

            console.log(filtro);

            if (filtro.length == 0) {
                alert('Ese genero no se encuentra disponible');
            } else{
                
                let generoEncontrado = filtro.map((generoEncontrado) => generoEncontrado.titulo )

                alert(`Estos son los Juegos encontados :\n${generoEncontrado.join('\n')}`);

            }
            break;
        }
    }

}

