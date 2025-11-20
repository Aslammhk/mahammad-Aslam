import { GoogleGenAI } from "@google/genai";
import { Dish } from "../types";

let ai: GoogleGenAI | null = null;

try {
  // Vite replaces process.env.API_KEY with the actual string literal at build time.
  // We rely on this replacement, so we don't check typeof process.
  const apiKey = process.env.API_KEY;
  
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  } else {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

export const getChefInsight = async (dish: Dish): Promise<string> => {
  if (!ai) {
    return "Our chef recommends pairing this with a smile! (AI Key missing)";
  }

  try {
    const prompt = `
      Act as a world-class Michelin star chef. 
      Write a short, enticing, 2-sentence "Chef's Insight" for the following dish: "${dish.name}".
      The dish description is: "${dish.description}".
      Ingredients include: ${dish.ingredients.join(', ')}.
      Focus on the flavor profile and why it's special. Do not use hashtags.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "A delightful choice for any palate.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "This dish is prepared with the finest ingredients and utmost care.";
  }
};

export const chatWithRestaurant = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
    if (!ai) return "I'm currently offline, please check back later.";

    try {
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a helpful and polite restaurant assistant for 'Gourmet Touch'. Answer questions about food, menu items (Burgers, Pizza, Pasta, Seafood), ingredients, and dietary restrictions. Keep answers concise (under 50 words). Be friendly."
            },
            history: history
        });

        const response = await chat.sendMessage({ message });
        return response.text || "I'm not sure about that.";
    } catch (e) {
        console.error(e);
        return "I'm having trouble connecting to the kitchen. Ask me again in a moment.";
    }
}