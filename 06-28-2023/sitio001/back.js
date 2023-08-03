"use strict";
// el front que pegué es un fron que consmirá este backend. para ir viendo como funciona.
// http://127.0.0.1:5500/06-28-2023/sitio001/front.html ahí se ve. pero no creo que se te vea a tí así que tensmitiré.
// ya lo veo 
// ok llenaremos esa tabla con nuestros objetos.
// para esto creé estas interfaces:
// interface Direccion {
//     calle: string;
//     ciudad: string;
//     codigoPostal: string;
// }
// interface Contacto {
//     email: string;
//     telefono: string;
// }
// interface Usuario {
//     nombre: string;
//     edad: number;
//     direccion: Direccion;
//     contacto: Contacto; 
// }
// quiero que las mires y me digas si entiendes qué son y como se implementan
// sabes qué significa interfaz? eso imas importante para los datos ,  datos personales,  nacimientos etc como registro civil 
// una interfaz es un medio por el cual...
// eso es. una puerta, una pantalla un teclado. existen muchas
// interfaces gráficas (UI) user interface... bla bla...
// entonces en TypeScript una interfaz es un medio por el cual.... si te fijas
// definimos las reglas... se escribe el contrato si yo digo
// esta clase implementa esta interfaz quiere decir que debe seguir sus reglas
// por eso se llama interfaz. por que define las reglas del medio por el cual... por ejemplo
// se crearán las direcciones, los usuarios y el contacto.... ok? si no cumple
// es decir que si el usuario no tiene nombre, no es un Usuario por queno cumple
// con la interfaz ok?
// si, te entiendo. pero eso mas importante ETICA para trabajar en back end no se puede robo por los datos
// datos son privicidad y no publico porque privicidad por usuarios y rut o direccion. 
// te refieres a esto?
// eso se llama encapsulamiento, y tiene que ver con la programación, no con la privacidad. Y por regla general en una interfaz sus atributos son protected, pero no te confundas con eso
// (el encapsulamiento) public, protected, private, default. 
// que es significa permiso policia para powersort no me acuerdo muy bien 
// no entendí eso
// ayer en la clases de un alumno habla sobre permiso policia para certificado node o algo asi 
// no lo sé, si quieres averiguo pero no me suena :S
// es muy raro para miclases 
// no ví la última, ví la del martes y me pareció bien traducida. un alsuimiin o proguntó
// si se permitía herencia múltiple. y no está permitido, dijeron que verían pero no se permite.
// para eso existen las interfaces. para decir por eejemplo que una mujer y un hombre son de la interfaz humano y que tienen como atributos piernas ojos etc, y luego no lo tengo que programar por separado uso una interfaz
// entiendo.... 
// cuando estés programando hay que imaginar el json.. y como representarlo en interfaces. ene l ejemplo
// hay datos personales de contacto y dirección. yo tomé la decición de hacerlo en tres interfaces
// separada, pero tambien puede ser en una pero sería raro mira
const dato = {
    "Nombre": "Carlos",
    "Edad": "23",
    "Dirección": "Su casa",
    "Email": "Su mail",
    "Teléfono": "0948098",
};
/// eso serviría... pero la vida real no es así mira eso.
// se ve la web? siii lo vi 
// fíjate como son los json
// no son tan sencillos, son como
const dato2 = {
    "Nombre": "Carlos",
    "Edad": "23",
    "Dirección": {
        "bla": 8888,
    },
    "contacto": {
        "Email": "Su mail",
        "Teléfono": "0948098",
    }
};
// puede variar entre personas, hay que pillar eso, esta es la panacea
// hacer tantos, que luego te dicen un problema y ya sabes
// qué interfaces necesitas para mapear el json ok? ahora
// es bkn por que así me puedes pararslkkldsjfkljflksjfldkj
// entonces ahora llegó un cliente que necesita guardar esa info
// yo digo ammm podría servir esto, hagámoslo. Mi front lo tengo
// preparado para leer una lista de objetos usuarios. que creemos acá.
// debemos seguir las reglas, hacemos esto y terminamos okis?
// siempre los datos llegarán en forma de arreglos. por eso 
// crearemos nuestro arreglo que guarda los datos:
const usuarios = [];
//ahora creamos cada clase siguiendo la interfaz
// Clase para implementar la dirección (dime si tienes dudas de esta clase) *no es igual anteriores
class DireccionClass {
    constructor(calle, ciudad, codigoPostal) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }
}
// Clase para implementar el contacto
class ContactoClass {
    constructor(email, telefono) {
        this.email = email;
        this.telefono = telefono;
    }
}
// Clase para implementar al usuario
class UsuarioClass {
    constructor(nombre, edad, direccion, contacto) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.contacto = contacto;
        // this.nombre = nombre.toLowerCase() // demostración de métodos // ya veremos esto
    }
}
// las clases son moldes e la interfaz, es como si la interfaz moldeara las clases
// pero aún no hacemos nada, estamos estructurando nada más...
// dale te mando el ejercicio resuelto. y me preguntas dudas no más :) ok?
// yaaa bkn mi misión es que seas la mejor no menos así que a ejercitar :)
