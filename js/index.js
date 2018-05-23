var Estudiante = [
    {
        codigo: "001",
        nombre: "Alejandro",
        nota: 4
    }, {
        codigo: "002",
        nombre: "Andres",
        nota: 3
    }, {
        codigo: "003",
        nombre: "Federico",
        nota: 5
    }, {
        codigo: "004",
        nombre: "Gonzalo",
        nota: 8
    }, {
        codigo: "005",
        nombre: "Matias",
        nota: 3
    }, {
        codigo: "006",
        nombre: "Cristian",
        nota: 8
    }
];

window.onload = function(){
    mostrar();
    actualizar_cod();

    document.getElementById("b_registrar").addEventListener("click", r_estudiante);
    document.getElementById("b_promedio").addEventListener("click", m_promedio);
    document.getElementById("b_mayor").addEventListener("click", m_mayor);
    document.getElementById("b_menor").addEventListener("click", m_menor);


};

function actualizar_cod(){

    var codigo = document.getElementById("codigo");
    codigo.value = "";
    codigo.value ="00" +( Math.trunc(Estudiante[Estudiante.length-1].codigo) + 1);

    if(Math.trunc(Estudiante[Estudiante.length-1].codigo)+1 > 9){
        codigo.value ="0" +( Math.trunc(Estudiante[Estudiante.length-1].codigo) + 1);
    }
}
function leerJSON(json) {
    var out = "-----------Ventas-----------<br>";
    var i;
    for (i = 0; i < json.length; i++) {
        out += "Codigo:" + json[i].codigo + "-" + "Valor:" + json[i].valor + "<br>";
    }

    document.getElementById("ventas").innerHTML = out;

}
function mostrar(){


    var tbody = document.getElementById("contenido-tabla");
    tbody.innerHTML = "";
    var tablaLlena = "";
    
    for(var i=0;i<Estudiante.length;i++){
        tablaLlena += "<tr><td>"+Estudiante[i].codigo+"</td><td>"+Estudiante[i].nombre+"</td><td>"+Estudiante[i].nota+"</td></tr>";
    }
    tbody.innerHTML = tablaLlena;
}
function r_estudiante() {
    event.preventDefault();

    var e_cod = document.getElementById("codigo").value;
    var e_nom = document.getElementById("nombre").value;
    var e_not = parseInt(document.getElementById("nota").value);

    var nuevoEstudiante = { codigo: e_cod, nombre:e_nom, nota:e_not};

    Estudiante.push(nuevoEstudiante);
    e_nom= "";
    e_not= "";
    actualizar_cod();
    mostrar();
}
function m_promedio() {

    var resultado = 0;
    var cont =  Estudiante.length;


    for(var i=0;i<Estudiante.length;i++){
       resultado+=Estudiante[i].nota;
    }

   alert("El promedio de las notas de los estudiantes registrados es: " + (resultado/cont).toFixed(2) );
}
function m_mayor() {

    
    alert("Mostrar mayor");
}
function m_menor() {
    alert("Mostrar menor");
}

