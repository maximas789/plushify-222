import { gallerySamples } from "./mock-data/gallery-samples";
import { mockUser } from "./mock-data/user";
import type { Plushie } from "./mock-data/plushies";

export interface MockGenerationResult {
  plushie: Plushie;
  status: "success" | "error";
}

/**
 * Mock function to simulate plushie generation with a delay
 * @param originalImage - URL of original image
 * @param style - The style to apply (kawaii, cartoon, realistic, vintage)
 * @param size - The size of plushie (small, medium, large)
 * @returns Promise that resolves to a mock plushie result
 */
export async function mockGeneratePlushie(
  originalImage: string,
  style: "kawaii" | "cartoon" | "realistic" | "vintage",
  size: "small" | "medium" | "large"
): Promise<MockGenerationResult> {
  // Simulate 3-5 second generation time
  const delay = Math.random() * 2000 + 3000; // Random between 3000-5000ms

  await new Promise((resolve) => setTimeout(resolve, delay));

  // Pick a random gallery sample as generated image
  const sample = gallerySamples[Math.floor(Math.random() * gallerySamples.length)];

  if (!sample) {
    throw new Error("No gallery samples available");
  }

  const plushie: Plushie = {
    id: `plushie_${Date.now()}`,
    userId: mockUser.id,
    originalImage,
    generatedImage: sample.generatedImage,
    style,
    size,
    createdAt: new Date(),
    isFavorite: false,
  };

  return {
    plushie,
    status: "success",
  };
}
