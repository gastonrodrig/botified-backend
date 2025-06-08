import { openai } from '../config/index.js';
import { handleNotFoundError } from '../utils/index.js';

export const handlePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return handleNotFoundError("Prompt inválido", res);
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      store: true,
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error al procesar el prompt:", error);
    res.status(500).json({ error: "Error al generar la respuesta" });
  }
};

export const handlePromptTurbo = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return handleNotFoundError("Prompt inválido", res);
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      store: true,
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error al procesar el prompt con GPT-3.5 Turbo:", error);
    res.status(500).json({ error: "Error al generar la respuesta" });
  }
};