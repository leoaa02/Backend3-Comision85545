## Entrega N°1 – Backend III (Coderhouse)

En este proyecto se implementa un servidor backend utilizando **Node.js** y **Express**, incorporando un router específico para mocking de datos bajo la ruta base `/api/mocks`.

Se desarrollaron endpoints para la generación de datos simulados de usuarios y mascotas utilizando **Faker**, incluyendo la encriptación de contraseñas con **bcrypt** y la asignación dinámica de roles.  
Además, se implementó un endpoint que permite generar e insertar registros en **MongoDB** a partir de parámetros numéricos enviados por request.

### Endpoints principales
- `GET /api/mocks/mockingpets`
- `GET /api/mocks/mockingusers`
- `POST /api/mocks/generateData`

El proyecto permite validar la correcta inserción de los datos generados mediante la base de datos y cumple con los requisitos establecidos para la primera entrega del curso Backend III.
