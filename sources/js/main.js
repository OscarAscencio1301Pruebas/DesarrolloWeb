const url = "https://swapi.dev/api/people";
fetch(url)
    .then(datos => datos.json())
    .then(info => mostrarDatos(info.results))

function mostrarDatos(info) {
    info.forEach(persona => {
        const { name } = persona;
        console.log(name)
    });
}