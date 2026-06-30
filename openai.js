// Import the required packages
import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ quiet: true });

// Initialize the OpenAI client with API key from environment variables
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the main function to demonstrate OpenAI API usage.
// We use the Responses API (client.responses.create), OpenAI's current
// recommended interface. Docs: https://developers.openai.com/api/docs/guides/text
async function generateResponse() {
  try {
    const response = await client.responses.create({
      model: "gpt-5.4-mini",
      temperature: 0.3, // Low temperature for more deterministic outputs
      // `input` can be a plain string or, as here, a list of role-based
      // messages so you can see the system / user message flow.
      input: [
        {
          role: "system",
          content:
            "You are a helpful, creative, and concise assistant that specializes in writing short stories for children.",
        },
        {
          role: "user",
          content: "Write a one-sentence bedtime story about a unicorn.",
        },
      ],
    });

    // `output_text` is a convenience accessor that joins all text output.
    console.log(response.output_text);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Execute the function
generateResponse();
