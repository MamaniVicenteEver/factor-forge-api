const ProjectIdea = require('../../domain/entities/project-idea');

class GenerateBlueprint {
  constructor(aiRepository) {
    this.aiRepository = aiRepository;
  }

  async execute(rawIdea) {
    const projectIdea = new ProjectIdea(rawIdea);
    // Llamada al puerto (interfaz) de IA
    return await this.aiRepository.generateMarkdown(projectIdea.idea);
  }
}

module.exports = GenerateBlueprint;