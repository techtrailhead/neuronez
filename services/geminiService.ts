import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Course Counselor for the "AI Study Lab" by Neuronez.
This is a 4-week intensive live cohort program designed to teach students how to BUILD AI systems, not just use tools.
The tone should be professional, encouraging, yet realistic about the rapid pace of AI.

Program Details to Reference:
- Duration: 4 Weeks (Live Sessions).
- Focus: Building RAG (Retrieval Augmented Generation), AI Workflows, Automations, MCP (Model Context Protocol) Server-Client, Fine-tuning models, and understanding Deep Learning Architectures.
- Target Audience: Tech, Product, Marketing, Sales, Business, Healthcare. Anyone who wants to future-proof their career.
- Philosophy: "It is not AI that will replace you, but someone who uses AI." We teach the "How" and "Why" under the hood.
- Projects: Build a custom RAG pipeline, Create an Autonomous Agent, Fine-tune a Llama/Gemini model on custom data.
- Prerequisites: Basic understanding of logic/programming is helpful but we start from foundations. No PhD required.
- Pricing: Early Bird $499, Standard $799.

Function:
Answer user questions about the syllabus, difficulty, schedule, or career impact. Keep answers concise (under 100 words) and persuasive.
`;

export const chatWithCounselor = async (userMessage: string, history: { role: string, parts: [{ text: string }] }[]): Promise<{ text: string, image?: string }> => {
  // Always create a new instance to ensure we use the latest injected API key from the selection dialog
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Simple heuristic to detect image generation requests
    const isImageRequest = /draw|generate image|create an image|visualize|sketch/i.test(userMessage);

    if (isImageRequest) {
      // Use Nano Banana Pro (gemini-3-pro-image-preview) for high quality images
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: userMessage }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
          }
        },
      });

      // Iterate through parts to find the image
      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData) {
            const mimeType = part.inlineData.mimeType || 'image/png';
            const base64Image = part.inlineData.data;
            return {
              text: "Visualization generated with Gemini 3 Pro:",
              image: `data:${mimeType};base64,${base64Image}`
            };
          }
        }
      }
      return { text: "I attempted to generate the image, but the model did not return visual data." };
    }

    // Default text chat
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: userMessage }] } // Simple single-turn for simplicity in this demo
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return { text: response.text || "I couldn't process that. Try asking about the curriculum." };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble connecting to the server. Please ensure you have selected a valid API Key." };
  }
};