import { Router } from "express"
import { CreateMovieController } from "../model/movies/useCases/createMovie/CreateMovieController"
import { CreateMovieRentController } from "../model/movies/useCases/createMoveRent/CreateMovieRentController"
import { GetMoviesByReleaseDateController } from "../model/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController"


const crateMovieController = new CreateMovieController()
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()
const createMovieRentController = new CreateMovieRentController()

const movieRoutes = Router()

movieRoutes.post("/", crateMovieController.handle)
movieRoutes.post("/release", getMoviesByReleaseDateController.handle)
movieRoutes.post("/rent", createMovieRentController.handle)

export { movieRoutes }