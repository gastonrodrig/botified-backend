import express from 'express';
import { handlePromptUnified } from '../controllers/index.js';

const router = express.Router();

/**
 * @swagger
 * /prompts/unified:
 *   post:
 *     summary: Genera código con GPT-4o-mini o GPT-3.5 Turbo
 *     tags: [Prompts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prompt
 *               - model
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "Escribe una función en Python para sumar dos números"
 *               model:
 *                 type: string
 *                 enum: ["gpt-4o-mini", "gpt-3.5-turbo"]
 *                 example: "gpt-4o-mini"
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
router.post("/unified", handlePromptUnified);

export default router;