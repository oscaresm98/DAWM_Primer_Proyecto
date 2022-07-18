let cargarPartidos = async (event) => {
    let respuesta = await fetch("./json/juegos2018.json");
    let datos = await respuesta.json();
    let juegos = datos["data"]
    let i=1
    for (let juego of juegos) {
        let local = juego["home_team"].full_name;
        let visitante = juego["visitor_team"].full_name;
        let fecha = juego.date.split("T")[0];
        let status = juego.status;
        let ganador="Empate";
        let r=juego.home_team_score-juego.visitor_team_score
        if(r>0){
            ganador=local
        }else if(r<0){
            ganador=visitante
        }
        let plantilla = `<tr>
            <td>${local}</td>
            <td class="d-none d-xl-table-cell">${visitante}</td>
            <td class="d-none d-xl-table-cell">${fecha}</td>
            <td><span class="badge bg-success">${status}</span></td>
            <td class="d-none d-md-table-cell">${ganador}</td>
        </tr>`;
        document.querySelector('.contenido').innerHTML +=plantilla;
        if(i==8) break;
        i++;
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarPartidos();
});
