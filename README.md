# :sparkles: Reto Técnico: Full Stack Developer - Cheil Peru :dart:

## Descripción :page_facing_up:

Este proyecto es un reto técnico para el puesto de Full Stack Developer en Cheil Peru. El reto consiste en 3 pasos:

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

## Recomedaciones :bulb:

- Adaptar el repositorio a un monorepo multipaquete para tener un mejor manejo de los proyectos.
- Utilizar GitHub Actions para CI/CD y Docker Hub para el almacenamiento de las imagenes de Docker.
- Usar los servicios de AWS o Azure para la publicación de APIs y Front End
