import {
    CopilotRuntime,
    OpenAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
  } from '@copilotkit/runtime';
  import OpenAI from 'openai';
  const token = process.env.OPENAI_API_KEY
  const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: token
  });
  const serviceAdapter = new OpenAIAdapter({openai});
  const runtime = new CopilotRuntime();
   
  export const POST = async (req) => {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: '/api/copilotkit',
    });
   
    return handleRequest(req);
  };