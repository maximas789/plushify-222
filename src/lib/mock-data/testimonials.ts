export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial_1",
    name: "Emily Chen",
    avatar: "/avatars/default-avatar.png",
    text: "Plushify turned my wedding photo into the most adorable plushie ever! My husband cried when he saw it. Best gift idea!",
    rating: 5,
  },
  {
    id: "testimonial_2",
    name: "Michael Torres",
    avatar: "/avatars/default-avatar.png",
    text: "I ordered plushies of my two dogs and they look exactly like them! The quality is amazing and the kawaii style is perfect.",
    rating: 5,
  },
  {
    id: "testimonial_3",
    name: "Sarah Johnson",
    avatar: "/avatars/default-avatar.png",
    text: "The vintage style plushie of my grandmother's photo was so touching. It's now a cherished family heirloom.",
    rating: 5,
  },
  {
    id: "testimonial_4",
    name: "David Kim",
    avatar: "/avatars/default-avatar.png",
    text: "Super easy to use! I uploaded my daughter's drawing and got a cute cartoon plushie. She absolutely loves it!",
    rating: 5,
  },
  {
    id: "testimonial_5",
    name: "Jessica Martinez",
    avatar: "/avatars/default-avatar.png",
    text: "I've tried other plushie makers but Plushify is by far the best. The AI really captures the essence of the original photo.",
    rating: 5,
  },
];
