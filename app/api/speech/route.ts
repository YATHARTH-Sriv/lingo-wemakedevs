import { lmnt } from "@ai-sdk/lmnt";
import { openai } from "@ai-sdk/openai";
// import { openai } from "@ai-sdk/openai";
import { experimental_generateSpeech as generateSpeech } from "ai";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    console.log(text)
    // const audio = await generateSpeech({
    //     model: lmnt.speech('aurora'),
    //     text: 'Hola, mundo!',
    //     language: 'es', // Spanish
    //     });
    const { audio } = await generateSpeech({
      model: openai.speech("tts-1"),
      text: text,
    });
    console.log(audio)
    return new Response(audio.uint8ArrayData, {
      headers: {
        "Content-Type": audio.mediaType || "audio/mpeg",
      },
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}