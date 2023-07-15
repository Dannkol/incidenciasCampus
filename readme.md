
# Sistema de insidencias campuslands

El centro de apoyo tecnologico de campuslands do ha contratado para construir una aplicación que permita devar la gestion de insidencias tecnicas en cada una de las salas de entrenamiento y review. el dider de it desea que cada trainer pueda reportar das insidencias ocurridas. 

El departamento de it ha clasificado las insidencias en las siguientes categorias: hardware & software, cada trainer desea ingresar la siguiente informacion al momento de reportar la insidencia categora, tipo insidencia, descripción, fecha reporte area de insidencia y lugar de la la insidencia.

Campuslunds cuenta con 4 areas generales en las cuales se encuentran los equipos tecnologicos de uso diario de los campers 4 trainers. las areas son las siguientes: area training (apolo, artemis sputnik y skylab), area review 1 (corvus), area review 2 (endor).

### Puntos a realizar

* Las insidencias se pueden categorizar en leve, moderada y critica. 

* El sistema debe permitir asignar computadores, teclados, mouse y diademas de sonido en cada uno de los salones (lugares). 

* El sistema debe permitir crear trainers (ld, nombre, email personal, email corporative, telefona movil, telefon residencia, telefano empress, telefono mavil empresarial)
# Diagrama MER

![Diagrama](https://github.com/Dannkol/incidenciasCampus/blob/main/doc/diagrama_mer.JPG?raw=true)




## Run Locally

Clona el repositorio

```bash
  git clone https://github.com/Dannkol/incidenciasCampus.git
```

ve al directorio

```bash
  cd incidenciasCampus
```

Instala las dependencias

```bash
  npm install
```

Start server

```bash
  npm run dev
```

crea la base de datos con el archivo database.sql


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dannkol.github.io/portafolios/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-manosalva-000b98242)