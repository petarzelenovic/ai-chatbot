import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import type { CoreMessage, LanguageModel } from "ai";

export const runtime = "nodejs";
//adding this to prevent premature close

export const createOpenAiModel = (apiKey: string) => {
  const openai = createOpenAI({ apiKey });
  return openai("gpt-5-nano");
};

export async function generateChatResponse(
  model: LanguageModel,
  messages: CoreMessage[]
) {
  if (!Array.isArray(messages) || !messages.length) {
    throw new Error("Invalid messages format");
  }

  const response = await generateText({ model, messages });
  return response.text.trim();
}
