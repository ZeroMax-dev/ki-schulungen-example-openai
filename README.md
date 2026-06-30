# OpenAI Responses API Example

A simple Node.js application demonstrating the OpenAI API with a basic text-generation example using the Responses API (`client.responses.create`).

## Prerequisites

- Node.js (version 20.x or higher recommended)
- An OpenAI API key

## Setup

1. Clone or download this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your OpenAI API key:
   - Open the `.env` file
   - Replace `your_openai_api_key_here` with your actual OpenAI API key
   ```
   OPENAI_API_KEY=your_actual_api_key
   ```

## Usage

Run the example script:

```
npm start
```

This will execute a simple prompt asking for a one-sentence bedtime story about a unicorn using `gpt-5.4-mini`.

## About This Example

The script demonstrates:
- Loading environment variables with dotenv
- Initializing the OpenAI client
- Using system prompts to guide the AI's behavior
- Setting temperature for controlling randomness (lower = more deterministic)
- Error handling for API requests

## Modifying the Example

You can modify the `openai.js` file to:
- Change the prompt
- Adjust the temperature parameter (0-1)
- Try different models
- Customize the system prompt
- Add more messages to the conversation
