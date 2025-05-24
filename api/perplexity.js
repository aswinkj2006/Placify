// Replace YOUR_API_KEY_HERE with your real key
const API_KEY = "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";
const API_URL = "https://api.perplexity.ai/chat/completions";

export async function generateInterviewPrep(resumeText) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are an AI placement assistant. Help students prepare for interviews based on their resume."
        },
        {
          role: "user",
          content: `Here's my resume:\n${resumeText}\n\nGenerate 5 personalized interview questions and summarize key strengths.`
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
