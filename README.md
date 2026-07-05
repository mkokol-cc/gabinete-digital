# GabineteDigital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.












estoy haciendo este frontend, el cual es para un sistema DMS en el cual hay plataformas que simulan ser las originales, en las que los alumnos realizan los tramites online para cuestiones contables que el colegio que me contrato enesenia. despues hay otros usuarios que son los alumnos que actuan como los trabajaadores de estas plataformas (como lo son ARCA, Banco Nacion, ETC) y lo que hacen es controlar los tramites y darles el ok o no segun corresponda, ademas tambien hay cosas como tasas fijas por mes y demas. en si es una simulacion de una empresa para con los organismos que contextualizan todo su entorno. y la idea es digitalizar todos estos documentos que se envian entre si. ademas tambien esta los usuarios profesores los cuales pueden ver todos los movimientos de documentacion entre las entidades que simulan organismos y las entidades que simulan empresas, o las que simulan empresas entre si. el objetivo de todo esto es digitalizar todo.

---

## Plataforma Digital de Gestión del Gabinete Contable

### ¿Qué es el sistema?

El sistema digitaliza el Gabinete Contable del colegio, reemplazando el uso de papel por una plataforma web donde los alumnos realizan trámites en plataformas simuladas, los organismos reciben y responden esos trámites, y los profesores supervisan todo el proceso. Cada acción genera constancias en PDF con formato institucional. El objetivo es simular el circuito administrativo real, pero en entorno digital.

---

### Actores del sistema

**Alumnos / Empresas**
Cada grupo de alumnos representa una empresa o entidad. Desde su panel pueden registrarse como empresa, realizar trámites ante distintos organismos (ARCA, Municipalidad, Banco, Cooperativa, etc.), completar formularios simulados similares a los reales, enviar documentación digital, descargar constancias en PDF y ver el estado de sus trámites.

**Organismos (ARCA, Banco Nación, Municipalidad, Cooperativa, etc.)**
Cada organismo simulado tiene su propio acceso. Desde su panel pueden ver los trámites recibidos, revisar la documentación enviada, aprobar o rechazar el trámite, escribir observaciones y generar automáticamente una constancia de respuesta en PDF. El sistema envía automáticamente la respuesta al alumno y notifica al profesor.

**Profesores / Supervisores**
Los docentes tienen acceso completo al sistema. Pueden ver todos los trámites de todos los cursos, filtrar por empresa, curso u organismo, supervisar qué grupos enviaron documentación, detectar trámites pendientes o rechazados, revisar PDFs enviados y respuestas, y reiniciar el sistema al comenzar un nuevo ciclo lectivo. El profesor actúa como supervisor general del gabinete digital.

---

### Circuito de un trámite

1. El alumno completa un formulario simulado.
2. El sistema genera una constancia en PDF.
3. El organismo recibe el trámite.
4. El organismo aprueba o rechaza.
5. Se genera un PDF de respuesta.
6. El alumno recibe la respuesta.
7. El profesor puede ver todo el proceso.

Todo queda registrado digitalmente.

---

### Tipos de trámites disponibles

- Inscripción en ARCA / AFIP
- Alta en Municipalidad
- Inscripción en Cooperativa
- Registro de inmueble
- Solicitud de servicio
- Envío de declaración
- Presentación de documentación

Todos funcionan bajo el mismo sistema de envío y respuesta.

---

### Generación automática de documentos

Cada vez que se realiza una acción, el sistema genera automáticamente un documento en PDF con formato institucional, incluyendo marca de agua de "Uso Escolar", fecha y hora registrada, e historial completo. Se crean constancias de inscripción, comprobantes de presentación, respuestas de organismos y notificaciones formales por correo electrónico.

---

### Beneficios

- Reduce el uso de papel
- Organiza la documentación digitalmente
- Permite seguimiento en tiempo real
- Simula procesos administrativos reales
- Mejora la experiencia educativa
- Facilita la supervisión docente
- Genera registro histórico digital

---

### Seguridad y alcance

Cada alumno solo puede ver su empresa. Cada organismo solo ve sus trámites. El profesor puede ver todo. El sistema guarda historial completo. Los documentos no pueden ser modificados luego de enviados. No requiere instalaciones en cada equipo, ya que funciona desde el navegador.