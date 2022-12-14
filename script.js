

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
grafico_Donut(datosIngresos, etiquetas, titulo, "#donut-chart1");

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
grafico_Donut(datosIngresos, etiquetas, titulo, "#donut-chart2");
datos();
ocultar_Botones()
};




function grafico_Donut(datosIngresos, etiquetas, titulo, objeto){
// Obtener una referencia al elemento canvas del DOM
var $donut = document.querySelector(objeto);

new Chart ($donut,{
  type: 'doughnut',// Tipo de gráfica. Puede ser doughnut o pie
  data: {
    datasets: [
          datosIngresos,
          // Aquí más datos...
        ],
        labels: etiquetas,
    },
    options: {
      title: {
          display: true,
          text: titulo,
      },
      legend: {
        position: "left",
      },

  },

  });

};

function popUp(URL) {
  window.open(URL, 'Nombre', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=300,height=200,left = 390,top = 50');
}
function verificar_Mail_Clave(){
  var $mail = document.getElementById('correo');
  var $clave = document.getElementById('palabraSecreta');
  if($clave.value=='42247476' && $mail.value=='sgenovese@gmail.com'){
    mostrar_Botones();
  } 
};

function datos(){
  var acerca_De ="Técnico Universitario en Automatización y Control, Informático, Docente, MCP, CCNA, Full Stack Developer Jr.";
  var $acerca_De =document.getElementById('acerca_De');
  $acerca_De.innerText=acerca_De;
};

function ocultar_Botones(){
  document.getElementById('edicion_Acerca_De').style.display='none';
  document.getElementById('borrado_Acerca_De').style.display='none';
};

function mostrar_Botones(){
  document.getElementById('edicion_Acerca_De').style.display='inline';
  document.getElementById('borrado_Acerca_De').style.display='inline';

};