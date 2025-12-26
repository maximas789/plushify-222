export interface Plushie {
  id: string;
  userId: string;
  originalImage: string;
  generatedImage: string;
  style: "kawaii" | "cartoon" | "realistic" | "vintage";
  size: "small" | "medium" | "large";
  createdAt: Date;
  isFavorite: boolean;
}

export const mockPlushies: Plushie[] = [
  {
    id: "plushie_1",
    userId: "user_1",
    originalImage: "/plushies/samples/before-1.jpg",
    generatedImage: "/plushies/samples/after-1.jpg",
    style: "kawaii",
    size: "medium",
    createdAt: new Date("2024-12-20"),
    isFavorite: true,
  },
  {
    id: "plushie_2",
    userId: "user_1",
    originalImage: "/plushies/samples/before-2.jpg",
    generatedImage: "/plushies/samples/after-2.jpg",
    style: "cartoon",
    size: "large",
    createdAt: new Date("2024-12-18"),
    isFavorite: false,
  },
  {
    id: "plushie_3",
    userId: "user_1",
    originalImage: "/plushies/samples/before-3.jpg",
    generatedImage: "/plushies/samples/after-3.jpg",
    style: "realistic",
    size: "small",
    createdAt: new Date("2024-12-15"),
    isFavorite: true,
  },
  {
    id: "plushie_4",
    userId: "user_1",
    originalImage: "/plushies/samples/before-4.jpg",
    generatedImage: "/plushies/samples/after-4.jpg",
    style: "vintage",
    size: "medium",
    createdAt: new Date("2024-12-10"),
    isFavorite: false,
  },
  {
    id: "plushie_5",
    userId: "user_1",
    originalImage: "/plushies/samples/before-5.jpg",
    generatedImage: "/plushies/samples/after-5.jpg",
    style: "kawaii",
    size: "large",
    createdAt: new Date("2024-12-05"),
    isFavorite: true,
  },
  {
    id: "plushie_6",
    userId: "user_1",
    originalImage: "/plushies/samples/before-6.jpg",
    generatedImage: "/plushies/samples/after-6.jpg",
    style: "cartoon",
    size: "medium",
    createdAt: new Date("2024-12-01"),
    isFavorite: false,
  },
];
