import { openai } from '../config/index.js';
import { handleNotFoundError } from '../utils/index.js';

const promptTemplate = (userPrompt) => `
${userPrompt}

Devuelve exclusivamente un único objeto JSON, sin ningún comentario ni texto adicional fuera del objeto.

Si tu respuesta contiene archivos de código, usa esta estructura:

{
  "files": [
    {
      "language": "[nombre del lenguaje en minúsculas]",
      "filename": "[ruta del archivo]",
      "content": "[código]"
    }
  ],
  "comments": [
    "Comentario o explicación opcional sobre el código."
  ]
}

Si tu respuesta NO contiene código, devuelve solo los comentarios así:

{
  "comments": [
    "Tu respuesta o explicación aquí."
  ]
}

Si no puedes responder, devuelve:

{
  "comments": ["Lo siento, no puedo ayudarte con esto."]
}
`;

export const handlePromptUnified = async (req, res) => {
  try {
    const { prompt, model } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return handleNotFoundError("Prompt inválido", res);
    }

    if (!model || (model !== "gpt-4o-mini" && model !== "gpt-3.5-turbo")) {
      return handleNotFoundError("Modelo inválido", res);
    }

    const formattedPrompt = promptTemplate(prompt);

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: formattedPrompt }],
    });

    const raw = completion.choices[0].message.content;

    let parsed;
    try {
      const jsonMatch = raw.match(/{[\s\S]*}/);
      if (!jsonMatch) {
        throw new Error("No se encontró un objeto JSON en la respuesta");
      }
      parsed = JSON.parse(jsonMatch[0]);
    } catch (err) {
      console.error("Error al parsear JSON:", err);
      console.error("Respuesta cruda:", raw);
      return res.status(500).json({
        error: "Error al interpretar la respuesta de la IA",
        rawResponse: raw
      });
    }

    // Normalizar estructura de archivos
    let files = [];
    if (parsed.files && Array.isArray(parsed.files)) {
      files = parsed.files;
    } else if (parsed.language && parsed.filename && parsed.content) {
      files = [parsed];
    }

    // Normalizar estructura de comentarios
    const comments = parsed.comments || [];

    res.status(200).json({
      files,
      comments
    });

  } catch (error) {
    console.error(`Error al procesar el prompt con ${model}:`, error);
    res.status(500).json({ error: "Error al generar la respuesta" });
  }
};
