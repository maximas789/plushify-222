export interface GallerySample {
  id: string;
  originalImage: string;
  generatedImage: string;
  style: "kawaii" | "cartoon" | "realistic" | "vintage";
  subject: string;
}

export const gallerySamples: GallerySample[] = [
  {
    id: "sample_1",
    originalImage: "/plushies/samples/before-1.jpg",
    generatedImage: "/plushies/samples/after-1.jpg",
    style: "kawaii",
    subject: "Cute dog photo",
  },
  {
    id: "sample_2",
    originalImage: "/plushies/samples/before-2.jpg",
    generatedImage: "/plushies/samples/after-2.jpg",
    style: "cartoon",
    subject: "Family portrait",
  },
  {
    id: "sample_3",
    originalImage: "/plushies/samples/before-3.jpg",
    generatedImage: "/plushies/samples/after-3.jpg",
    style: "realistic",
    subject: "Pet cat",
  },
  {
    id: "sample_4",
    originalImage: "/plushies/samples/before-4.jpg",
    generatedImage: "/plushies/samples/after-4.jpg",
    style: "vintage",
    subject: "Child's drawing",
  },
  {
    id: "sample_5",
    originalImage: "/plushies/samples/before-5.jpg",
    generatedImage: "/plushies/samples/after-5.jpg",
    style: "kawaii",
    subject: "Wedding photo",
  },
  {
    id: "sample_6",
    originalImage: "/plushies/samples/before-6.jpg",
    generatedImage: "/plushies/samples/after-6.jpg",
    style: "cartoon",
    subject: "Baby photo",
  },
];
