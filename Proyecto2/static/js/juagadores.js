let cargarJugadores = async (event) => {
    let respuesta = await fetch("./json/jugadores.json");
    let datos = await respuesta.json();
    let jugadores = datos["data"]
    for (let jugador of jugadores) {
        let id = jugador.id;
        let nombre = jugador.first_name + " " + jugador.last_name;
        let plantilla = `<option value="${id}">${nombre}</option>`;
        document.querySelector('select').innerHTML +=plantilla; 
    }

    
    const selectElement = document.querySelector('select');
    
    selectElement.addEventListener('change', async (event) => {
        let link = `https://damp-beach-17296.herokuapp.com/https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${event.target.value}` 
        let respuesta2= await fetch(link)
        let datoE= await respuesta2.json();
        let estadisdicas= datoE["data"][0];
        const resultdosE = [];
        //result.textContent = `You like ${event.target.value}`;

        let i=1;
        for (const key in estadisdicas){
            if(i>=4 && i<=16){
                resultdosE.push(estadisdicas.key)
            }
            i++;          
            
        }
        nuevoChart(resultdosE)
    });


    function nuevoChart (estadisdicas){
        new Chart(document.getElementById("chartjs-dashboard-bar"), {
            type: "bar",
            data: {
                labels: ["fgm", "fga", "fg3m", "fg3a", "ftm", "oreb", "dreb", "reb", "ast", "stl", "blk", "turnover"],
                datasets: [{
                    label: "This year",
                    backgroundColor: window.theme.primary,
                    borderColor: window.theme.primary,
                    hoverBackgroundColor: window.theme.primary,
                    hoverBorderColor: window.theme.primary,
                    data: estadisdicas,
                    barPercentage: .75,
                    categoryPercentage: .5
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        ticks: {
                            stepSize: 20
                        }
                    }],
                    xAxes: [{
                        stacked: false,
                        gridLines: {
                            color: "transparent"
                        }
                    }]
                }
            }
        });
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarJugadores();
});