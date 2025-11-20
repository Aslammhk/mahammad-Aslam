import { GoogleGenAI } from "@google/genai";
import { Dish } from "../types";

let ai: GoogleGenAI | null = null;

// In-memory cache to store generated insights prevents 429 errors by reducing API calls
const insightCache: Record<string, string> = {};

try {
  // Vite replaces process.env.API_KEY with the actual string literal at build time.
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
  // 1. Check Cache first
  if (insightCache[dish.id]) {
    return insightCache[dish.id];
  }

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

    const text = response.text || "A delightful choice for any palate.";
    
    // 2. Save to Cache
    insightCache[dish.id] = text;
    return text;

  } catch (error: any) {
    console.error("Gemini API error:", error);
    
    // 3. Specific handling for Quota Exceeded (429)
    if (error?.status === 429 || error?.response?.status === 429 || error?.message?.includes('429')) {
       // Return a generic high-quality description to mask the error from the user
       return "This signature dish is crafted with a balance of flavors that our customers love.";
    }
    
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
    } catch (e: any) {
        console.error(e);
        // Handle rate limits in chat
        if (e?.status === 429 || e?.message?.includes('429')) {
             return "I'm receiving too many questions right now! Please ask me again in a minute.";
        }
        return "I'm having trouble connecting to the kitchen. Ask me again in a moment.";
    }
}