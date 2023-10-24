# Explicación tabla Cliente.

![image](https://github.com/elrerag/TUTOR_NODE/assets/11900544/5d4c6961-d669-4a71-9132-600bd15770be)

La tabla cliente es una de las tablas que conforman el modelo de datos del sistema Capital Cervecera. Esta tabla sirve para almacenar los datos de los clientes que realicen compras.

La información del cliente será el conjunto de datos que forman su tabla, este conjunto de datos serán sus columnas y los datos que guarden cada una de estas columnas tendrán en formato según lo que requieran guardar, es decir un número, una cadena, una fecha, etc.

## Atributos de la tabla cliente:
- Nombre: nombre completo del cliente.
- direccion: dirección completa del cliente.
- telefono: celular del cliente.
- email: correo del cliente.
- contrasena: contraseña del cliente.

## Explicación de los tipos, es decir lo que guarda cada registro.
- Nombre: Cadena de texto (Varchar)
- direccion: Cadena de texto (Varchar)
- telefono: Cadena de texto (Varchar)
- email: Cadena de texto (Varchar)
- contrasena: Cadena de texto (Varchar)

## Representación SQL de la tabla cliente:

```sql
CREATE TABLE `cliente` (
  `id` varchar(100) PRIMARY KEY,
  `nombre` VARCHAR(100),
  `direccion` VARCHAR(100),
  `telefono` VARCHAR(100),
  `email` VARCHAR(100),
  `contrasena` VARCHAR(100)
);
```

La única diferencia está en que la tabla posee un primary key id para identificarlo.
