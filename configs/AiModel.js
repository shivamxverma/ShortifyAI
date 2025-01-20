const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 30 seconds video on topic : Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and Content Text as field, No Plain text\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, I understand. Here's the JSON output containing the script for a 30-second video about an interesting historical story, along with AI image prompts for each scene, all within a realistic style:\n\n```json\n{\n  \"video_script\": {\n      \"scene_1\": {\n        \"imagePrompt\": \"A dimly lit, cluttered 18th-century print shop. Gutenberg's printing press stands prominently, with workers in period clothing pulling levers. Ink smudges on their hands. A window provides a soft glow, illuminating dust motes.\",\n        \"content_text\": \"Narrator (Voiceover, calm and slightly awed): 'Before the internet, before even mass-printed newspapers...'\"\n       },\n        \"scene_2\": {\n        \"imagePrompt\": \"Close-up on a page being printed using the printing press. Focus on the intricate letters and the process of the ink transferring from the block onto the paper. Ink splatters add authenticity. The hands of a printer is visible.\",\n        \"content_text\": \"Narrator: '...there was a revolution happening quietly in workshops just like this.'\"\n       },\n        \"scene_3\": {\n        \"imagePrompt\":\"A shot of the Gutenberg Bible, displayed in a grand library room, with warm, inviting lights. It is surrounded by antique books and scholarly objects. People are looking on in awe.\",\n          \"content_text\": \"Narrator: 'Gutenberg's printing press. A single invention that changed how we share stories forever.'\"\n      },\n      \"scene_4\": {\n          \"imagePrompt\":\"A montage of different books, from old manuscripts to modern novels, quickly cuts together to showcase the impact of printing on world.\",\n           \"content_text\":\"On-screen text: 'The Power of Print - Still Strong Today.'\"\n       }\n    },\n  \"overall_image_description\": \"The overall image style should be realistic, reminiscent of historical paintings and photographs. Lighting will be dramatic, with strong contrasts between light and shadow. The color palette will lean towards warm browns, sepia tones, and muted colors to convey the period.\"\n}\n```\n"},
        ],
      },
    ],
  });
const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
console.log(result.response.text());