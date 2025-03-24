// Import the required packages
import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize the OpenAI client with API key from environment variables
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
