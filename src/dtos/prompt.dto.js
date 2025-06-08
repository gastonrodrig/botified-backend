import { handleNotFoundError } from '../utils/index.js';

export class PromptDTO {
  constructor({ prompt, model }) {
    if (!prompt || typeof prompt !== "string") {
      return handleNotFoundError("Prompt inválido", res);
    }

    if (!model || (model !== "gpt-4o-mini" && model !== "gpt-3.5-turbo")) {
      return handleNotFoundError("Modelo inválido", res);
    }

    this.prompt = prompt;
    this.model = model;
  }
}