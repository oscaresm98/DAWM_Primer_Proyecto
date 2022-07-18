let cargarEquipos = async (event) => {
    let respuesta = await fetch("./json/teams.json");
    let datos = await respuesta.json();
    let equipos = datos["data"]
    for (let equipo of equipos) {
        let id = equipo.id;
        let nombre = equipo.full_name;
        let plantilla = `<option value="${id}">${nombre}</option>`;
        document.querySelector('select').innerHTML +=plantilla; 
    }

    const selectElement = document.querySelector('select');
    
    selectElement.addEventListener('change', async (event) => {
        let id=parseInt(event.target.value, 10)
        document.getElementById("grafico").innerHTML=`<canvas id="chartjs-pie"></canvas>`
        let respuesta2= await fetch("./json/juegos2018.json")
        let datoE= await respuesta2.json();
        let estadisdicas= datoE["data"];
        const resultdosE = new Map();
        resultdosE.set("ganados", 0);
        resultdosE.set("empatados", 0);
        resultdosE.set("perdidos", 0);
        //result.textContent = `You like ${event.target.value}`;

        let i=0;
        for (const juego of estadisdicas){
            if(juego["home_team"].id==id){
                //let p3=estadisdicas[`${key}`]
                let gano =juego.home_team_score - juego.visitor_team_score;
                if(gano>0){
                    i=resultdosE.get("ganados") + 1
                    resultdosE.set("ganados", i)
                }else if (gano==0){
                    i=resultdosE.get("empatados") + 1
                    resultdosE.set("empatados", i)
                }else {
                    i=resultdosE.get("perdidos") + 1
                    resultdosE.set("perdidos", i)
                }
            }
      
            
        }
        let suma =resultdosE.get("ganados") + resultdosE.get("empatados") + resultdosE.get("perdidos") 
        if(suma==0){
            document.getElementById("grafico").innerHTML = `<h4> Este equipo no tiene estadisticas que mostrar</h4>`
        }else {
            nuevoChart(Array.from(resultdosE.values()))
        }
        

        
    });


    function nuevoChart (estadisdicas){
        new Chart(document.getElementById("chartjs-pie"), {
            type: "pie",
            data: {
                labels: ["Ganados", "Empatados", "Perdidos"],
                datasets: [{
                    data: estadisdicas,
                    backgroundColor: [
                        window.theme.primary,
                        window.theme.warning,
                        window.theme.danger,

                    ],
                    
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarEquipos();
});
