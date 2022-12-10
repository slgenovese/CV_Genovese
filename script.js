

function graficos(){
// Las etiquetas son las porciones de la gráfica
var etiquetas = ["C/C++", "VB/.Net","Assembler","HTML/CSS/JavaScript"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
var titulo ="Lenguajes de Programación"
var datosIngresos = {
  data: [35, 35, 10, 15], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
  backgroundColor: [
    'red',
    'green',
    'blue',
    'orange',
],// Color de fondo
  borderColor: [
    'red',
    'green',
    'blue',
    'orange',
],// Color del borde
  borderWidth: 0,// Ancho del borde
};
grafico_Donut(datosIngresos, etiquetas, "#donut-chart1");

// Las etiquetas son las porciones de la gráfica
var etiquetas = ["Escritura", "Hablado","Lectura"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
var titulo ="Ingles Técnico"
var datosIngresos = {
  data: [10, 10, 80], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
  backgroundColor: [
    'red',
    'green',
    'blue',
],// Color de fondo
  borderColor: [
    'red',
    'green',
    'blue',
],// Color del borde
  borderWidth: 0,// Ancho del borde
};
grafico_Donut(datosIngresos, etiquetas,"#donut-chart2");
};




function grafico_Donut(datosIngresos, etiquetas, objeto){
// Obtener una referencia al elemento canvas del DOM
var $donut = document.querySelector(objeto);

new Chart ($donut,{
  type: 'doughnut',// Tipo de gráfica. Puede ser doughnut o pie
  data: {
    datasets: [
          datosIngresos,
          // Aquí más datos...
        ],
        label: 'titulo',
        labels: etiquetas,
    },
});

};