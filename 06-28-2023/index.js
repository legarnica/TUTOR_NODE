"use strict";
// escribiendo
//hola podemos escribir los dos al mismo tiempo
// prueba si puedes escribir acá?
//hola profe, empieza archivo 
// oks, con esta herramienta puedo compartir mi IDE. así vamos los dos
// lo primero vamos a activar esto para comenzar con TS
// se ve la consola? si quieres terminas de transmitir
// para ahorrar CPU Acá veremos el código, pero es importante que se vea la consola
//no esta subtitulada 
// consola.... 
// todo lo importante, lo pondré acá ok?
// de acuerdo 
// Comenzaré con operaciones sobre aRRays, pero yo me enfocarè
// en lo que hago en el trabajo, no tanto con conceptos, más bien 
// lo práctico.
// lo primero es hacer que parta node. puedes hacerlo tu? o lo hago yo?
// ok,  voy haciendo un practica para el code 
// pero desde acá mismo. recuerdas que tienes control tambien de mi IDE
// partiré yo.
// 1- iniciando typescript
// entro a la carpeta donde quiero trabajar.
// y tambien mKdir crea nueva carpeta ?
// ya la tenía creada, se llama 06-28-2023 y dentro tengo el archivo ts que iremos trabajando en esta parte antes de pasar a interfaces.
//ok
// lo primero es que no veremos la salida desde una web, por que somos el back. Luego 
// en el otro ejercicio haceremos un ejemplo con una web consumiendo.
// para ver el js compilado (transpilado), lo hacemos con node solamente.
// abrí otra consola al lado para estar transpilando en una y viendo 
// resultados en el otro bueno? ok
// acá el archivo index.ts se transpila a index.js por que los
// navegadores entienden el .js y nosotros el ts ok?ok
// probemos
// console.log("hola mundo")
// viste? si lo veo 
// ejecutalo tu a ver?
// no puede escrubir consola 
// jeje oks, haré eso yo pero el código lo iremos escribiendo los dos
// vamos aprendiendo a usar eso
// cd 06-28-23 y luego ls y luego tsc --init y luego node index.j 
// el tsc -w está como un wile(true){compila}
//solo automatico configuracion con consola tsc -w 
// lo malo es que tenemos que usar node para ver el js transpilado. está claro eso? entiendo 
// hay una forma de haacerlo directo transpilar y comprobar pero lo dejaremos para la otra clase
// ahora vamos a lo que nos convoca xD
// Arrays..
// classes y objetos (sí eso tambíen) esto cortito sí 
// declaramos dos arreglos para hacer los ejemplos:
// const colores: string[] = 
// [
// 	'rojo', 
// 	'verde', 
// 	'azul', 
// ];
// const numerosEnPalabras = [
//     'Uno',
//     'Dos',
//     'Tres',
// ];
// OK si (sabes como saber si colores es un arreglo?)
// si ,  debe ser color con string 
// la forma de saber si una variable es un array o no.
//Array.isArray(valor)
// console.log(Array.isArray(colores))
// preguntamos así cada vez que quieras saber si es un arrego u otra cosa en un if.
// siguente operación si no hay dudas con este?
// ok. 
// eso.ok estás creando dos Arrays?
// no lo crees, operaremos sobre el primero Nombre. 
// const Nombre:string []=
// [
//     'Emilia',
//     'Juan carlos',
//     'Jonathan',
// ]
// const ApellidoAbecedarios = [. // ordenado con Abecedarios? Lo veremos lo veremos jeje
//     "A"
//     "b"
//     "C"
// ]
// comentaré esto
// const colores: string[] = 
// [
// 	'rojo', // posición 0
// 	'verde', // posición 1
// 	'azul', // posición 2
// ];
// const numerosEnPalabras = [
//     'Uno',
//     'Dos',
//     'Tres',
// ];
// sabes como obtener el largo? de colores? si,  poca palabras, falta mas colores.... 
// dices que colores tiene muy pocos elementos? ,  me equevoque... 
// pero si yo requiero el largo de colores, (cuantos elementos tiene?)
// lo puedes hacer? hasta 8 
// ok, Los Arrays, tienen una propiedad, que se llama length, la conoces? si,  hace meses en clases de un profe Puedes aplicarlo?(veremos todas las más importantes una a una, por eso pregunto para ver si lo hago o si lo puedes hacer :)) si 
// ok, siguente... 
// console.log(colores.length) // resultado 3
// así iremos ok? ok
// Obtener el elemento en la posición 0? no entiendo 
// const elemento_en_posicion_cero = colores[0] // lo conoces? nunca me escucha  elemento_en_posicion_cerocons 
// console.log(elemento_en_posicion_cero)
// // imprime el de la posición 1 tú ()
// const elemento_en_posicion_1 =colores[1]
// console.log(elemento_en_posicion_1)
// const elemento_en_posicion_2 =colores[2] 
// perfecto!!! ahora una cosa. 
// esta_forma_de_escribir se llala snake_case
// es usado para nombres de poca importancia como variables.
// EstaOtraFormaDeEscribir se llama CamelCase, es usado
// para nombres más importantes como clases, types, interfaces...
// ok? para quitar esa confusión no todos siguen estas reglas
// pero son lo más común en una buena práctica. ok?
// encontonces, nunca más CamelCase para una variable que no sea
// interface o clase :)
// sigamos 
// const colores: string[] = 
// [
// 	'rojo', // posición 0
// 	'verde', // posición 1
// 	'azul', // posición 2
// ];
// const numerosEnPalabras = [
//     'Uno',
//     'Dos',
//     'Tres',
// ];
// quitar el último elemento? // casi para eso se usa pop() (tengo un material de esto)
// no te procupes por anotar.
// const elemento_quitado = colores.pop()
// // lo malo de pop es que cambia el Array original. le corta uno
//  console.log(elemento_quitado)
//colores.forEach(x=>console.log(x)) // haré una cosa que veremos pero es para imprimir no más
// este lo sacó: 'azul', 
// se entiende el pop()? es muy usado
// interesante,  esa palabras pop pero hay otro variable palabras se parecido diccionarios 
// es mira, haré un paréntesis
// esto es un Array []
// pero ["uno", "dos"]
// es un array pero si lo mirámos más profundamente es como 
// const diccionario = {
//     "foo": "uno",
//     1: "dos"
// }
// console.log(diccionario["foo"])
// funciona como si fuenra un array pero es un dic. es que en escencia son lo "mismo"
// pero al diccionario me deja cambiar el valor de su key..
// un Array me deja estática su key en 0, 1, 2, .... y así, por eso
// puede que compartan algunos comportamiento, pero más compartes
// confusiones, pero es por eso, por que son como una clase de herencia o evolución
// constructor como padre así funciona todo. hay un objeto padre y todos heredan de él entiendo, ok 
// sigamos. igual hay que entender algo. Typescript está pensado para la web.
// no es como java, java se instala en un pc y conversa directamente con la máquiena.
// es decir que tiene poder para destruirla, javascript no. es soo para node
// y la web. por eso no hay que ser tan estricto con las reglas de orientación a 
// objetos como en java, como creer que cuando trabajes te tocará
// crear clases padres hijas y optimizarlas... ya verás en el ejemplo que tengo para
// qué se usa enn typescript y no se sale mucho de eso la verdad. Si deseas profundizar 
// el conocimiento de Orientación a Objetos, te recomiendo Java o C pero Java es más
// comercial y científico. 
// sorry es que me encanta la OO :)
// tengo una publicación en java para que la mires marrato, eso explica
// la razón de ser de java y la OO. pero sin confundirse, ya que para js es difernte el enfoque.
// acá la ciencia es saber trabajar con arreglos y mapear objetos a interfaces
//Java es antigua ?, el profe me dice porque este el siglo XX novadedes phyton 
// java nació el 94 y tiene mucha experiencia en todos los ambitos, python igual es potente
// está dificil la pelea ahí jejej manejo los dos  menos node jajaja es del que menos sé pero ya lo sé jejej
// cual es potente para aplicacion de back end ?
// depende, si es para una web, cualquiera, pero con node es más rápido además
// que la mayoría sabe js, en el front, así no les cuesta pasar a TS. No pasa lo mismo con java
// pero si es para la web, son todos parecidos, todos tienen su patrón 
// el más común modelo vista controlador. pero en el fondo, si aprendes uno, los sabes todos
// yo conozco spring boot y desde ese aprendí Django y Node. Vamos por el primero
// los demás caen como dominos entiendo ok 
// entonces vimos pop() usaremos pop para eliminar siempre, aunque quite el último
// tendremos que ver si vamos quitando el último qué va pasando si nos sirve, pero eso
// se puede ver solamente sobre la practica, lo importante es que para sacar. pop()
// para quitar el primer elemento:
// const colores: string[] =
//     [
//         'rojo', // posición 0
//         'verde', // posición 1
//         'azul', // posición 2
//     ];
// const elemento = colores.shift()
// console.log("array modificado", colores)
// console.log("elemento eliminado", elemento)
// se entiende? si entiendo.  interesante 
// oks has escuchado hablar de las funciones de alto orden? no 
// en la programación ... antes de eso, sabes qué es un paradigma? no escuchado nada pero leido subtituada pero alguna vez si me acorde con el profe es un poco explicar eso 
// un paradigma es simplemente una solución... aceptada como solución
// no es la única solución pero están todos los que sabes 
// conformes que eso... es una solución. por ejemplo cuando desarrollamos
// aumentan las líneas de código hasta el infinito... eso es un problema...
// para eso existen dos grandes paradigmas (es decir dos soluciones aceptadas), existen más
// pero los más grandes paradigmas son la Orientación a Objetos y La programación Funcional
// js es funcional y eso quiere decir entre otras cosas que posee algo llamado funciones de alto orden.
// la programación orientada a objetos no tiene eso. tiene clases herencia y otras técnicas. 
// se entiende? por eso cuesta un poco js, por que a veces vemos cosas como estas
// arreglo.map(x=>......) // por qué esto??? bueno esto es una función de alto orden.
// es decir que recibe una función como parámetro... (una característica) ok
// desde el ayer en clases de un profe me explico sin parametro y otro parametro por ejemplo x=> 
// esas son las funciones flecha, pero lo importante es que las funciones de alto
// orden que más se usan en JS o TS son map(), reduce(), find(), forEach()
// lo que quiere decir es esto
const colores = [
    'rojo',
    'verde',
    'azul', // posición 2
];
// función que recibe un elemento y retorna el elemeto en mayúscula
// function unaFuncion(elemento:string){
//     return elemento.toUpperCase()
// }
// console.log(unaFuncion("aaa"))
// lo retorna en mayúscula. ahora veamos lo siguinte...
// colores.forEach(function (elemento:string){
//     return elemento.toUpperCase()
// })
// metí la función entera y le saqué el nombre, por eso se llama
// función anónima. ok? por que no tiene nombre.
// lo que hace esta anónima es transformar un elemento a mayúscula
// esta función está dentro de una función de alto orden que se llama
// forEach... ok? entiendo 
// lo que hae forEach(por cada) elemento... que exista en el arreglo
// le aplico esa función...
// ahora con las funciones flecha. es lo mismo pero cambia algunas cosas
// par y impares 
// función normal
function porDos(numero) {
    return numero * 2;
}
// función flecha (hagamos la misma para entender la flecha y lo que se cambia)
const porDoss = (number) => {
    return number * 2;
};
// perame un poquito que me quedo sin batería xD
console.log(porDoss(3));
const porDosss = (number) => number * 2; // se puede ver que si resuelvo en una línea, no hace falta el return... pero son las tres funciones lo mismo... se entiende?siii
console.log(porDosss(2));
// pasemos al otro ejercicio te enviaré las otras operaciones perame un poquito
// ya te envié por wassap el resto de operaciones, para que las mires y después me digas si tienes dudas o no alcanzaremos a ver nada de interfaces 
/// el otro ejercicio se trata de usar interfaces para que sean consumidas con un front que hice.
// obviamente es un aproximación de lo que es un backend completo, pero servirá para entender 
// la razón de ser de las interfaces.
// primero crearé una carpeta que será donde esté el proyecto.
