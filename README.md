# :sparkles: Reto Técnico: Full Stack Developer :dart:

## Descripción :page_facing_up:

Este proyecto es un reto técnico para el puesto de Full Stack Developer en la empresa Cheil Peru. El reto consiste en 3 pasos:

1. **Base de Datos**: Modelar una base de datos relacional con tablas usando buenas prácticas.
2. **Backend**: Crear una API REST que se conecte a la base de datos del paso 1 para hacer un CRUD. 
3. **Frontend**: Crear una interfaz web que consuma la API REST del paso 2 para modificar la base de datos.

> [!NOTE]
> Para información más detallada del reto técnico, revisar el archivo [technical test.pdf](media/technical-test.pdf).

## Tecnologías :computer:

- **Base de Datos**: PostgreSQL
- **Backend**: Node.js, Nest.js
- **Frontend**: React, Next.js
- **Entorno de Desarrollo**: Docker, Docker Compose V2

## Instalación :inbox_tray:

**Clona el repositorio:**

```bash
git clone https://github.com/juliogarciape/cheil-peru-technical-test.git
```

**Inicia el entorno de desarrollo:**

```bash
docker compose up
```

## Notas :memo:

- Se utilizo Docker y Docker Compose para el entorno de desarrollo.
- Para acelerar la descarga y ejecucion de paquetes se desarrollo tambien en GitHub Codespaces.
- En el directorio `database` se creó un [README.md](databases/README.md) más detallado para el paso 1
- En el directorio `backend` se creó un [README.md](backend/README.md) más detallado para el paso 2
- En el directorio `frontend` se creó un [README.md](frontend/README.md) más detallado para el paso 3

### Pendientes :construction:

- Consumir los endpoints (products, categories, auth) de la API en el Frontend y renderizarlos desde React Server Components y Server Actions.
- Agregar validaciones de datos en los formularios de React
- Agregar redirecciones en el frontend para una mejor experiencia de usuario y a su vez validar el JWT desde el backend
- Crear Guards en Nest.js para manejar la autenticación de los usuarios y los permisos a los endpoints
- Personalizar el manejador de respuestas en los endpoints de Nest.js para tener un mejor control de los errores y solicitudes

## Recomedaciones :bulb:

- Adaptar el repositorio a un monorepo multipaquete para tener un mejor manejo de los proyectos.
- Optimizar el Docker Compose para liberar peso en la creacion de la imagen de Docker.
- Utilizar GitHub Actions para CI/CD y Docker Hub para el almacenamiento de las imagenes de Docker.
- Usar los servicios de AWS o Azure para la publicación de APIs y Front End
