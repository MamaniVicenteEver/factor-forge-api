class ProjectIdea {
  constructor(idea) {
    if (!idea || typeof idea !== 'string' || idea.length < 10) {
      throw new Error('La idea del proyecto debe ser un texto descriptivo de al menos 10 caracteres.');
    }
    this.idea = idea;
  }
}

module.exports = ProjectIdea;