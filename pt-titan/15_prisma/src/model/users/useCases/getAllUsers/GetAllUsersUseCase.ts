import { prisma } from "../../../../prisma/cliente";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}