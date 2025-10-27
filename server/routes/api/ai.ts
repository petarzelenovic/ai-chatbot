import {
  createOpenAiModel,
  generateChatResponse,
} from "../../services/ai-service";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const model = createOpenAiModel(runtimeConfig.openaiApiKey);

  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const response = await generateChatResponse(model, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
