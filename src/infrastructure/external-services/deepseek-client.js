const axios = require("axios");
const { DEEPSEEK_API_KEY } = require("../config/env");
const logger = require("../config/logger");

class DeepSeekClient {
  async generateMarkdown(idea) {
    try {
      logger.info(
        "Iniciando Pipeline de Agentes: Investigador -> Especialista -> Supervisor",
      );

      const response = await axios.post(
        "https://api.deepseek.com/v1/chat/completions",
        {
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: `Actua como un Orquestador de Arquitectura. Tu flujo interno se divide en 3 agentes virtuales:
            
            1. AGENTE INVESTIGADOR (Research): Su funcion es mapear la idea contra los recursos de https://www.12factor.net. Debe identificar servicios de respaldo (Backing Services), dependencias y flujos de datos.
            
            2. AGENTE DE ALCANCE (Scope Specialist): Su funcion es definir los limites tecnicos. Debe asegurar que cada recomendacion sea realista, escalable y que cumpla estrictamente con la paridad de entornos (Factor X).
            
            3. SUPERVISOR DE CALIDAD (QA Supervisor): Es el filtro final. Debe consolidar la informacion en un README.md profesional. 
               RESTRICCIONES DEL SUPERVISOR:
               - Prohibido el uso de emojis.
               - Formato Markdown de alta calidad.
               - Tono serio y puramente tecnico.
               - Verificar que los 12 factores esten presentes y bien justificados.`,
            },
            {
              role: "user",
              content: `IDEA A PROCESAR: "${idea}". 
            
            Instruccion para la red de agentes:
            - Investigador: Extrae requerimientos de infraestructura cloud.
            - Alcance: Define la implementacion de los 12 factores para esta idea.
            - Supervisor: Redacta el documento final.`,
            },
          ],
          temperature: 0.2,
          max_tokens: 3000,
        },
        {
          headers: {
            Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      const finalResult = response.data.choices[0].message.content;

      if (finalResult.includes("😀") || finalResult.includes("🚀")) {
        logger.warn(
          "El Supervisor detecto emojis prohibidos. Limpiando respuesta...",
        );
        return finalResult.replace(
          /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
          "",
        );
      }

      return finalResult;
    } catch (error) {
      logger.error("Fallo en la Red de Agentes: " + error.message);
      throw new Error(
        "La red de agentes no pudo consolidar una respuesta valida.",
      );
    }
  }
}

module.exports = DeepSeekClient;
