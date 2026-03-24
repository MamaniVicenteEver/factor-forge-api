# Etapa de construccion
FROM node:20-slim

# Definicion del directorio de trabajo
WORKDIR /usr/src/app

# Copia de archivos de dependencia
COPY package*.json ./

# Instalacion de dependencias (Factor II)
RUN npm ci --only=production

# Copia del codigo fuente (Arquitectura Hexagonal)
COPY src/ ./src/

# Exposicion del puerto (Factor VII)
EXPOSE 3000

# Comando de ejecucion
CMD ["node", "src/infrastructure/config/server.js"]