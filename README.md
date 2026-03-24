# Factor-Forge AI: AI-Driven Architectural Blueprint Generator

## 1. Descripcion del Proyecto
Factor-Forge AI es un microservicio especializado en la transformacion de conceptos de software en documentos de arquitectura tecnica detallados. El sistema utiliza modelos de lenguaje avanzados (DeepSeek y Geminis) para analizar una idea de negocio y generar automaticamente un archivo en formato Markdown que detalla la implementacion de los Doce Factores (12-Factor App) especifica para dicho contexto.

Este proyecto ha sido desarrollado como parte del programa de Ingenieria en Desarrollo Comercial de Software en Jala University, con el objetivo de demostrar la integracion de inteligencia artificial en flujos de trabajo de arquitectura cloud-native.

## 2. Detalles del Autor
* **Desarrollador:** Ever
* **Institucion:** Jala University
* **Fecha:** Marzo, 2026
* **Materia:** Arquitectura de Software / Metodologia de los Doce Factores

## 3. Arquitectura del Sistema
El proyecto implementa una Arquitectura Hexagonal (Ports and Adapters) para desacoplar la logica de negocio de las dependencias externas:

* **Dominio (Domain):** Contiene las entidades de negocio y las interfaces de los repositorios. Es el nucleo del sistema y no tiene dependencias externas.
* **Aplicacion (Application):** Orquesta los casos de uso, como la generacion del blueprint, comunicandose entre el dominio y la infraestructura.
* **Infraestructura (Infrastructure):** Contiene las implementaciones concretas, como el controlador de Express, la configuracion de variables de entorno y el cliente de comunicacion con el API de DeepSeek.

## 4. Tecnologias Utilizadas
* **Runtime:** Node.js (v20+)
* **Framework Web:** Express.js
* **IA Model:** DeepSeek-V3 / DeepSeek-R1 (via API)
* **Gestion de Variables:** Dotenv
* **Control de Versiones:** Git

## 5. Endpoints de la API

### Health Check
* **Metodo:** GET
* **Ruta:** `/health`
* **Descripcion:** Verifica el estado de operacion del microservicio y la conectividad con el proveedor de IA.

### Generar Blueprint
* **Metodo:** POST
* **Ruta:** `/v1/blueprint`
* **Cuerpo de la peticion (JSON):**
    ```json
    {
      "idea": "Descripcion detallada del sistema de software",
      "context": "Opcional: Entorno de despliegue o restricciones tecnicas"
    }
    ```
* **Respuesta:** Documento Markdown puro con recomendaciones de arquitectura 12-factor.

## 6. Instrucciones de Ejecucion

### Requisitos Previos
1. Disponer de una clave de API valida de DeepSeek.
2. Tener instalado Node.js y npm en el sistema.

### Instalacion
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```

### Configuracion de Entorno
Crear un archivo `.env` en la raiz del proyecto con las siguientes variables:
```env
PORT=3000
DEEPSEEK_API_KEY=tu_clave_aqui
NODE_ENV=development
```

### Ejecucion
Para iniciar el servidor en modo de desarrollo:
```bash
npm run dev
```
Para iniciar el servidor en produccion:
```bash
npm start
```

## 7. Alineacion con los Doce Factores
* **Factor III (Configuracion):** Toda la configuracion sensible se inyecta via variables de entorno.
* **Factor VI (Procesos):** El servicio es totalmente stateless; no almacena informacion en el sistema de archivos local.
* **Factor XI (Logs):** Los eventos de ejecucion se envian a stdout como flujos de datos continuos.