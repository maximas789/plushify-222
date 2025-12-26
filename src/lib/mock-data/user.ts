export const mockUser = {
  id: "user_1",
  name: "Sarah Johnson",
  email: "sarah@example.com",
  avatar: "/avatars/default-avatar.png",
  createdAt: new Date("2024-01-15"),
  credits: 50,
} as const;

export type MockUser = typeof mockUser;
