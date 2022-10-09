//aporte de jose g daza 

var v_candidatos = new Array(4); //Cantidad de votos
var n_candidatos = new Array(4); //Nombres de los candidatos

v_candidatos[0] = 0;
v_candidatos[1] = 0;
v_candidatos[2] = 0;
v_candidatos[3] = 0;

n_candidatos[0] = "TERESA THATCHER"
n_candidatos[1] = "ALEXANDER CLINTON"
n_candidatos[2] = "STALIN MOTTA"
n_candidatos[3] = "URSULA WANGARY"

//empieza la funcion le pasamos candidato
function voto(candidato) {
    v_candidatos[candidato] = v_candidatos[candidato] + 1;
    alert("Usted ha votado por : "+ n_candidatos[candidato])

}



function estadistica() {
    let total = v_candidatos[0] + v_candidatos[1] + v_candidatos[2] + v_candidatos[3];
    let pcan1 = (v_candidatos[0] / total) * 100 ;
    let pcan2 = (v_candidatos[1] / total) * 100 ;
    let pcan3 = (v_candidatos[2] / total) * 100 ;
    let pcan4 = (v_candidatos[3] / total) * 100 ;

    let nodopar1 = document.createElement('p');
    let nodopar2 = document.createElement('p');
    let nodopar3 = document.createElement('p');
    let nodopar4 = document.createElement('p');

    let text= document.createTextNode("votos "+n_candidatos[0]+" : "+ v_candidatos[0]+ " - Porcentaje: "+pcan1+ "%");

    let text1= document.createTextNode("votos "+n_candidatos[1]+" : "+ v_candidatos[1]+ " - Porcentaje: "+pcan2+ "%");


    let text2= document.createTextNode("votos "+n_candidatos[2]+" : "+ v_candidatos[2]+ " - Porcentaje: "+pcan3+ "%");


    let text3= document.createTextNode("votos "+n_candidatos[3]+" : "+ v_candidatos[3]+ " - Porcentaje: "+pcan4+ "%");

    nodopar1.appendChild(text);
    nodopar2.appendChild(text1);
    nodopar3.appendChild(text2);
    nodopar4.appendChild(text3);


    let elementotabla =document.getElementById('ver');

    elementotabla.appendChild(nodopar1);
    elementotabla.appendChild(nodopar2);
    elementotabla.appendChild(nodopar3);
    elementotabla.appendChild(nodopar4);

var xValues = ["TERESA THATCHER", "ALEXANDER CLINTON", "STALIN MOTTA", "URSULA WANGARY"];
var yValues = [ v_candidatos[0],  v_candidatos[1],  v_candidatos[2],  v_candidatos[3]];
var barColors = ["pink", "purple","blue","orange"];

new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Candidatos"
      }
    }
  });

    

    



}
