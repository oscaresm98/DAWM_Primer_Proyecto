let cargarTarjetas = async(event) =>{
    let respuesta = await fetch("./json/jugadores.json");
    let data = await respuesta.json();
    let tituloTarjeta = document.querySelectorAll('.card-title')
    let fgm = document.querySelectorAll('.fgm')
    let porc = document.querySelectorAll('.porcentaje')   
    let jugadores = data["data"];
    let j=0;
    for (let jugador of jugadores) {
        let nombre = jugador.first_name + " " + jugador.last_name;
        let link = `https://damp-beach-17296.herokuapp.com/https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${jugador.id}` 
        let respuesta2= await fetch(link)
        let datoE= await respuesta2.json();
        if(datoE["data"].length!=0){
            let porcentaje = (a, b) => {return (a*100)/b};
            let golesCampo=datoE["data"][0].fgm
            tituloTarjeta[j].innerHTML=nombre;
            fgm[j].innerHTML = golesCampo; 
            porc[j].innerText = porcentaje(golesCampo, datoE["data"][0].fga).toFixed(2) + "%" + " "
            j++; 
        }
        if(j==4){
            break;
        }          
    }
}
let cargarPuntosVisitantes = async (event) =>{
    var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
    gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
    let respuesta = await fetch("./json/Juegos2018.json");
    let datos = await respuesta.json();
    let juegos = datos["data"]
    let equiposVisitantes = new Map();
    for (let juego of juegos){
        let nombreAbreviado = juego["visitor_team"].abbreviation;
        let puntajeVisitante = juego.visitor_team_score;
        if(equiposVisitantes.has(nombreAbreviado)){
            puntajeVisitante+=equiposVisitantes.get(nombreAbreviado);            
        }
        equiposVisitantes.set(nombreAbreviado, puntajeVisitante);
        if (equiposVisitantes.size>11){
            break;
        }
    }
    // Line chart
    new Chart(document.getElementById("chartjs-dashboard-line"), {
        type: "line",
        data: {
            //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: Array.from(equiposVisitantes.keys()),
            
            datasets: [{
                label: "Puntos",
                fill: true,
                backgroundColor: gradient,
                borderColor: window.theme.primary,
                data: Array.from(equiposVisitantes.values())
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                intersect: false
            },
            hover: {
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    reverse: true,
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 1000
                    },
                    display: true,
                    borderDash: [3, 3],
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }]
            }
        }
    });
}
let cargarCiudades = async (event) => {
    let respuesta= await fetch("./json/juegos2018.json");
    let datos= await respuesta.json();
    let juegos =datos["data"];
    let ciudades = new Map();
    for(let juego of juegos){
        if(ciudades.has(juego["home_team"].city)){
            let i = ciudades.get(juego["home_team"].city) + 1
            ciudades.set(juego["home_team"].city, i);
        }else{
            ciudades.set(juego["home_team"].city, 1);
        }
    }
    const sortedMap = new Map( [...ciudades].sort((x, y) => y[1] - x[1]));
    let topCiudad=[];
    let ciudadDatos=[];
    let equiposhtml=document.querySelectorAll(".eq-g");
    let datoshtml=document.querySelectorAll(".text-end");
    let i=0;
    for(let [key, value] of sortedMap){
        topCiudad.push(key);
        ciudadDatos.push(value)
        equiposhtml[i].innerHTML=key;
        datoshtml[i].innerHTML=value;
        i++;
        if(ciudadDatos.length==3) break;
    }

    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: "pie",
        data: {
            labels: topCiudad,
            datasets: [{
                data: ciudadDatos,
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // cargarTarjetas();
    cargarPuntosVisitantes();
    cargarCiudades();
});