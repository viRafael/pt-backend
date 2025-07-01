import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/cliente";
import { CreateMovieRentDRO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
    async execute({ movieId, userId }: CreateMovieRentDRO): Promise<void> {
        // Verificar se filme existe 
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!movieExists) {
            throw new AppError("Movie does not exist!")
        }

        // Verificar se o filme já esta alugado 
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId: movieId
            }
        })

        if (movieAlreadyRented) {
            throw new AppError("Movie already rented!")
        }

        // Verificar se o usuario existe
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (userExists) {
            throw new AppError("User already exists!")
        }

        // Criar a alocação 
        await prisma.movieRent.create({
            data: {
                movieId,
                userId
            }
        })
    }
}