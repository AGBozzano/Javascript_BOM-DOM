var Registro = [
    {
        "codigo": "001",
        "nombre": "Alejandro",
        "nota": 4
    }, {
        "codigo": "002",
        "nombre": "Andres",
        "nota": 3
    }, {
        "codigo": "003",
        "nombre": "Federico",
        "nota": 5
    }, {
        "codigo": "004",
        "nombre": "Gonzalo",
        "nota": 8
    }, {
        "codigo": "005",
        "nombre": "Matias",
        "nota": 3
    }, {
        "codigo": "006",
        "nombre": "Cristian",
        "nota": 8
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

    var out = "-----------Total En Ventas-----------<br>";
    var totalVentas = 0.0;
    for (i = 0; i < json.length; i++) {
        totalVentas += json[i].valor;
    }

 

    document.getElementById("totalVentas").innerHTML = "El total de venta es de : " + totalVentas;

}
function r_estudiante() {
    leerJSON(ventas);
}
function m_promedio() {
    leerJSON(ventas);
}
function m_mayor() {
    calcularTotalVentas(ventas);
}5
function m_menor() {
    calcularTotalVentas(ventas);
}

