import { Router } from "express"
import { CreateMovieController } from "../model/movies/useCases/createMovie/CreateMovieController"

const crateMovieController = new CreateMovieController()

const movieRoutes = Router()

movieRoutes.post("/", crateMovieController.handle)

export { movieRoutes }