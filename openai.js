// Import the required packages
import OpenAI from "openai";
import dotenv from "dotenv";
import { HttpsProxyAgent } from "https-proxy-agent";

// Load environment variables from .env file
dotenv.config();

// Define proxy URL
const proxyUrl = `http://${process.env.PROXY_USERNAME}:${process.env.PROXY_PASSWORD}@webproxy.prod.d003.loc:8080`;

// Create proxy agents for HTTP and HTTPS
const httpsAgent = new HttpsProxyAgent(proxyUrl, { rejectUnauthorized: false });

// Initialize the OpenAI client with API key from environment variables and proxy configuration
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.openai.com/v1",
  httpAgent: httpsAgent
});

// Define the main function to demonstrate OpenAI API usage
async function generateCompletion() {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.3, // Low temperature for more deterministic outputs
      messages: [
        {
          role: "system",
          content: "You are a helpful, creative, and concise assistant that specializes in writing short stories for children."
        },
        {
          role: "user",
          content: "Write a one-sentence bedtime story about a unicorn.",
        },
      ],
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Execute the function
generateCompletion();
