var Registro = [
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
    var tablaLlena = "";
    
    for(var i=0;i<Registro.length;i++){
        tablaLlena += "<tr><td>"+Registro[i].codigo+"</td><td>"+Registro[i].nombre+"</td><td>"+Registro[i].nota+"</td></tr>";
    }
    tbody.innerHTML = tablaLlena;
}
function r_estudiante() {
    event.preventDefault();

    var u_cod = document.getElementById("codigo").value;
    var u_nom = document.getElementById("nombre").value;
    var u_not = document.getElementById("nota").value;

    var nuevoRegistro = { codigo: u_cod, nombre:u_nom, nota:u_not};

    Registro.push(nuevoRegistro);
}
function m_promedio() {
    mostrar();
}
function m_mayor() {
    calcularTotalVentas(ventas);
}5
function m_menor() {
    calcularTotalVentas(ventas);
}

