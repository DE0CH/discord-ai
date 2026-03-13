// chat.ts
const API_KEY = "sk-ant-your-api-key-here";

const messages = [
  { role: "user", content: "hey everyone" },
  { role: "user", content: "has anyone used typescript before?" },
  { role: "user", content: "yeah i use it daily, love it" },
  { role: "user", content: "coming from javascript it felt weird at first" },
  { role: "user", content: "the types are annoying until they save you" },
  { role: "user", content: "true, caught so many bugs with it" },
  { role: "user", content: "what about generics, anyone get those yet?" },
  { role: "user", content: "generics broke my brain for a week lol" },
  { role: "user", content: "the docs are pretty good once you get going" },
  { role: "user", content: "yeah i'd recommend just building something with it" },
];

const transcript = messages
  .map((m) => `${m.role}: ${m.content}`)
  .join("\n");

const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: "You are a helpful assistant that summarizes Discord conversations.",
    messages: [
      {
        role: "user",
        content: `Summarize this conversation:\n\n${transcript}`,
      },
    ],
  }),
});

const data = await response.json();
console.log(data.content[0].text);

export {};
