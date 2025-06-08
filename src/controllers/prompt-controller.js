import { openai } from '../config/index.js';
import { handleNotFoundError } from '../utils/index.js';

export const handlePromptUnified = async (req, res) => {
  try {
    const { prompt, model } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return handleNotFoundError("Prompt inválido", res);
    }

    if (!model || (model !== "gpt-4o-mini" && model !== "gpt-3.5-turbo")) {
      return handleNotFoundError("Modelo inválido", res);
    }

    const completion = await openai.chat.completions.create({
      model,
      store: true,
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    res.status(200).json({ result });
  } catch (error) {
    console.error(`Error al procesar el prompt con ${model}:`, error);
    res.status(500).json({ error: "Error al generar la respuesta" });
  }
};