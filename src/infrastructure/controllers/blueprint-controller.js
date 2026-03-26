const GenerateBlueprint = require('../../application/use-cases/generate-blueprint');
const DeepSeekClient = require('../external-services/deepseek-client');
const logger = require('../config/logger');

const deepSeekClient = new DeepSeekClient();
const generateBlueprintUseCase = new GenerateBlueprint(deepSeekClient);

/**
 * @openapi
 * /v1/blueprint:
 *   post:
 *     summary: Genera un blueprint de arquitectura
 *     description: Envia una idea a DeepSeek para obtener un README detallado con los 12 factores.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idea:
 *                 type: string
 *                 example: "Sistema de reservas para un gimnasio"
 *     responses:
 *       201:
 *         description: Markdown generado exitosamente
 *       400:
 *         description: Error en la peticion o idea invalida
 */
const createBlueprint = async (req, res) => {
  const { idea } = req.body;
  logger.info(`Iniciando generacion de blueprint para la idea: ${idea?.substring(0, 20)}...`);

  try {
    const markdown = await generateBlueprintUseCase.execute(idea);
    res.header('Content-Type', 'text/markdown');
    res.status(201).send(markdown);
  } catch (error) {
    logger.error(`Error procesando blueprint: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBlueprint };