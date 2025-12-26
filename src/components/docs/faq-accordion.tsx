import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "upload",
    question: "How do I upload an image?",
    answer: "You can upload an image by either dragging and dropping it into the upload zone on the dashboard, or by clicking the upload button to browse your files. We support JPG, PNG, and WEBP formats up to 10MB in size.",
  },
  {
    id: "generation",
    question: "How does the plushie generation work?",
    answer: "Once you upload an image and select your preferred style and size, our AI analyzes your photo and generates a cute plushie version. The process typically takes 3-5 seconds, and you'll see an animated progress indicator during generation.",
  },
  {
    id: "styles",
    question: "What styles are available?",
    answer: "We offer four distinct styles: Kawaii (adorable and cute), Cartoon (fun and playful), Realistic (detailed and lifelike), and Vintage (classic and nostalgic). Each style gives your plushie a unique personality!",
  },
  {
    id: "credits",
    question: "How do credits work?",
    answer: "Each plushie generation uses one credit. You can purchase credit packages: Basic (30 credits for $9), Pro (100 credits for $19), or Elite (200 credits for $29). Credits never expire, so you can use them whenever you want.",
  },
  {
    id: "download",
    question: "Can I download my plushie designs?",
    answer: "Absolutely! After generation, you can download your plushie design in high resolution. You can also save it to your gallery for easy access later. All your creations are stored securely in your personal gallery.",
  },
  {
    id: "gallery",
    question: "How do I manage my gallery?",
    answer: "Your gallery contains all your generated plushies. You can view them in a grid, filter by favorites or style, sort by date, and perform actions like download, share, favorite, or delete. Your gallery is automatically saved.",
  },
  {
    id: "sharing",
    question: "Can I share my plushies with others?",
    answer: "Yes! Each plushie in your gallery has a share button that lets you copy a link to share with friends and family. You can also download the image and share it on social media or messaging apps.",
  },
  {
    id: "file-formats",
    question: "What file formats are supported?",
    answer: "For uploads, we accept JPG, PNG, and WEBP formats up to 10MB. Generated plushies are delivered in high-resolution PNG format, perfect for printing or sharing digitally.",
  },
  {
    id: "privacy",
    question: "Is my data private and secure?",
    answer: "Your privacy is our priority. All uploaded images are processed securely and stored only in your personal gallery. We never share your images with third parties. See our Privacy Policy for more details.",
  },
  {
    id: "support",
    question: "How can I get help if I have issues?",
    answer: "If you encounter any problems, you can visit our documentation page for detailed guides. For specific issues, please contact our support team through the link in the footer. We're here to help!",
  },
];

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
