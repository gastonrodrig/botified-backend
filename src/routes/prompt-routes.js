import express from 'express';
import { handlePrompt, handlePromptTurbo } from '../controllers/index.js';

const router = express.Router();

/**
 * @swagger
 * /prompts/prompt-4.0:
 *   post:
 *     summary: Genera código con GPT-4
 *     tags: [Prompts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prompt
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "Crea una función que convierta Celsius a Fahrenheit"
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 */
router.post("/prompt-4.0", handlePrompt);

/**
 * @swagger
 * /prompts/prompt-3.5-turbo:
 *   post:
 *     summary: Genera código con GPT-3.5 Turbo
 *     tags: [Prompts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prompt
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "Genera una clase en Java para manejar usuarios"
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 */
router.post("/prompt-3.5-turbo", handlePromptTurbo);

export default router;
