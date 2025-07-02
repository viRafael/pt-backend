import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/cliente";
import { AppError } from "../../../../errors/AppError";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateUseMovieCase {
    async execute({ title, duration, release_date}: CreateMovieDTO): Promise<Movie> {
        // Verificar se User já existe
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title,
            }
        });

        if (movieAlreadyExists) {
            throw new AppError("Movie already exists!")
        }

        // Cria o Movie
        const movie = await prisma.movie.create({
            data: {
                title, 
                duration,
                release_date
            }
        })

        return movie;
    }
}