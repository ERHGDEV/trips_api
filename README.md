# Trips API 

Esto es una api para el registro de viajes de operadores de una empresa de transportes turísticos :bus: . 

## :open_book: Descripción 

Proporciona una API RESTful para gestionar los registros de viajes de operadores. Incluye funcionalidades para crear, leer, actualizar y eliminar registros de viajes.

Te puede servir como guía para desarrollar una api de acuerdo a tus necesidades. 

## 🛠️ Stack

- JavaScript
- Mongoose
- Express.js
- Node.js

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/ERHGDEV/trips_api.git
```

2. Navega al directorio del proyecto:

```bash
cd trips_api
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servicio:

```bash
npm run dev
```

5. Abre  **http://localhost:3001** en tu navegador. 

## :desktop_computer: Endpoints

- **GET** /api/trips - Obtener todos los viajes
- **GET** /api/trips/:id - Obtener un viaje por ID
- **POST** /api/trips - Crear un nuevo viaje
- **PUT** /api/trips/:id - Actualizar un viaje existente
- **DELETE** /api/trips/:id - Eliminar un viaje

## :link: Estructura del proyecto

|     | Directorio       | Descripción                                   |
| :-- | :--------------- | :-------------------------------------------- |
| :spiral_notepad:  | /controllers/trips.js | Este archivo define las rutas de la API relacionadas con los viajes. Utiliza Express para manejar las solicitudes HTTP.  |
| :spiral_notepad: | /models/trip.js | Este archivo define el esquema del modelo Trip utilizando Mongoose para interactuar con MongoDB. |
| :spiral_notepad:  | /utils/config.js        | Este archivo configura las variables de entorno necesarias para el proyecto. |
| :spiral_notepad:  | /utils/logger.js        | Este archivo define funciones simples para imprimir mensajes en la consola, diferenciando entre mensajes de información y errores. |
| :spiral_notepad:  | /utils/middleware.js        | Este archivo define funciones middleware para manejar registros de solicitud, manejo de puntos finales desconocidos y errores comunes en la aplicación. |
| :spiral_notepad:  | app.js        | Este archivo configura y ejecuta la aplicación principal utilizando Express.js. |
| :spiral_notepad:  | index.js        | Este archivo es el punto de entrada principal de la aplicación, donde se inicia el servidor Express y se escucha en un puerto específico definido en la configuración. |

## :open_file_folder: Modelo de datos 

- operador: Nombre del operador (String, requerido).
- tipoOperador: Tipo de operador (String, requerido).
- fechaSalida: Fecha de salida (Date, requerido).
- kmSalida: Kilómetros al momento de la salida (Number, requerido).
- ruta: Ruta del viaje (String, requerido).
- unidad: Unidad utilizada para el viaje (String, requerido).
- proyecto: Proyecto asociado al viaje (String, requerido).
- fechaLlegada: Fecha de llegada (Date, requerido).
- kmLlegada: Kilómetros al momento de la llegada (Number, requerido).
- diferencia: Diferencia de kilómetros entre salida y llegada (Number, requerido).
- observaciones: Observaciones adicionales sobre el viaje (String, opcional).

El esquema también incluye una transformación para convertir el campo _id en id y eliminar los campos _id y __v en el objeto JSON devuelto.

## :warning: Variables de entorno

Asegúrate de crear un archivo .env en el directorio raíz del proyecto y define las variables PORT y MONGODBURL según sea necesario para tu entorno.

**Ejemplo:**

```bash
PORT=3001
MONGODBURL=https://urlDeLaBaseDeDatos
```

## 🔑 Licencia

Este proyecto está bajo la Licencia MIT.

## Pendientes

- Autenticación / Autorización

