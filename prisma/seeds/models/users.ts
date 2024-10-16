import { UserRole } from "@prisma/client"

export const usersSeeds = [
  {
    name: "Alice",
    role: UserRole.member,
    email: "alice@example.com",
    emailVerified: new Date(),
  },
  {
    name: "Bob",
    role: UserRole.admin,
    email: "bob@example.com",
    emailVerified: new Date(),
  },
]
