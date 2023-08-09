import { Controller, Get, Param } from '@nestjs/common';

@Controller('personas') //(esto indica la URI: /personas)
export class PersonasController {
    // private quiere decir, que nadie, excepto este controler y sus métodos
    // modifican o acceden a esta propiedad. Se hace para que no me lo cambien desde otro controller
    // pero no tiene que ver con seguridad... ok? y tambien propiedad de intelectual 
    // no, tampoco tiene que ver, es una propiedad de orientación a objetos, es una regla
    // tengo una pregunta me da cursioso porque el militar o pdi o el gobierno hay secreto infromatica , nadie que sacar informacion 
    // dices que por qué no podemos ver su código? por que este backend 
    // se transforma en unos archivos que nadie excepto el servidor entiende, y la información no estará en 
    // duro, como se ve acá... estará resguadada en un servidor de base de datos
    // a la que solamente el servicio tiene acceso.(ahora como estamos estudiando está en duro)
    // si este es un controlador de Personas, tendrá un servicio y nada más, las propiedades
    // las veremos únicamente en las interfaces. 
    private persona = { // <-- Esto es una practica prohiiiiibida Pero nos sirve para el ejemplo ok?
        nombre: "María García",
        edad: 28,
        direccion: "Calle Principal, 123",
        trabajo: "Ingeniera de Software",
        ciudad: "Madrid",
        hobby: "Pintura"
      };
    // eso era lo del rojo....
    // los nombres de las funciones al azar, puede ser cualquier nombre ok? pero hay acuerdos. 
    // como los que usa el profe, pero en la vida real, acá puede decir cualquier cosa :/
    // lo importante es que sea descriptivo con lo que hace.
    // poner obtener Personas es redindante por que estoy dentro de personas se entiende?
    // se entiende que todas las personas, esto debe estar claro que se hace por módulo.
    // acá es quevemos el tamaño de la app, por cuantos módulos tenga. Por cada módulo
    // hay un controller, por cada controller hay un endpoint, por cada endpoint hay una función
    //nombre de lista : Juan pablo sepulveda quiroz,  jonathan rojas hernandez 
    // lo lo hizo como quería pero comencemos así
    // ¿qué me falta para poder usar esto desde postman? @.... @get
    // Get es algo llamado decorador, el decorador es una función que se ejecuta antes
    // al poner @Get, le digo queesta función será un Get... y ese Get está
    // programado en el mismo paquete donde tienen Controller, Get es
    @Get()// si no pones nada,,, asume personas/
    obtenerTodas() {
        const personas = [
            "Juan Pablo Sepúlveda Quiroz",
            "Jonathan Rojas Hernández"
          ];
        return personas;
    }

    // crea un get.. que retorne hola.
    // lo primero es que las funciones con minúscula
    // y las entidades con mayúscula Get es como una entidad
    // por eso van con mayúscula
    // recuerda que debe retornar hola

    // lo haremos hasta que salga :)
    // @Get("saludar:nombre")
    // es por que nombre, es un atributo de Param, yo pensé que era directo.
    @Get(":nombre")
    decirHola(@Param() nombre: string){
        return "hola " + nombre["nombre"];
    }

    // crea un get que retorne esa persona self.persona (tú)
    // oks, yo tengo una técnica para aprenderme estas cosas
    // lo hago muchas veces. this.persona ya existe... (pgado con java xD)
    // http://localhost:3000/personas/persona recuerda que es... controller/método...entonces?
    // http://localhost:3000/controller/método

    @Get("persona")
    datosPersonales () {
        return this.persona;
    }

    
    // ahora, quiero uno que diga adiós... 
    // usa siempre minúsculas a menos que sea una clase
    // Interfaz, Controller, Get, Post Put... Ok?
    // ante la duda minúscula.
    // probemos...
    // ¿como debería llamarlo en postman?
    // http://localhost:3000/(controller)/adios
    // a pesar que lo soporta... nunca usar tildes y ññññ

    @Get ("adios") // los decoradores van pegados al método. 
    decirAdiós (){
        const saludo =[
            "Chao"
        ]
        return saludo; 
    }

    /// ahora probemos el Post, mira no necesariamente necesitamos
    // un servidor de base de datos para eso. por que en el fondo,
    // lo que importa es que el controlador entienda que es un post
    // o un get, luego con programación, usaremos servicios
    // para hacerlo oficialmente, pero ahora haremos la lógica 
    // en el controlador para que la puedas practicar.
    // hagamos un get más.
}
// tengo un 404 por que no está el recurso, pero si funciona, mira, apagaré el servidor
// con el server parado, postman, no tiene ninguna respuesta por que no hay controller.
// se entiende que el controller aunque no tenga nada, al menos responde...
//