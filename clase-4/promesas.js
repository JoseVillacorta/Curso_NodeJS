
//console.log(fetch("https://google.com.pe"));

/*fetch("https://google.com.pe")
    .then(response => {return response.text()})
    .catch(error => {console.log(error)})
    .then(data => {console.log("mostrando data", data)})
    .finally(() => {console.log("se termino la promesa")});

console.log("despues de la promesa");*/




async function ejecutarFetch(url) {
    const response = await fetch("https://google.com.pe")
    const data = await response.text();    
    return data
}


console.log("antes del fetch await");
const datos = await ejecutarFetch("https://google.com.pe");
console.log(datos);
console.log("despues del fetch await");