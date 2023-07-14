import { castlesService } from "../services/CastlesService.js";
import BaseController from "../utils/BaseController.js";

export class CastlesController extends BaseController {
  constructor() {
    super('api/castles')
    this.router
      .get('', this.getCastles)
      .post('', this.createCastle)
  }
  async getCastles(req, res, next) {
    try {
      const castles = await castlesService.getCastles()
      res.send(castles)
    } catch (error) {
      next(error)
    }
  }
  async createCastle(req, res, next) {
    try {

    } catch (error) {
      next(error)

    }
  }
}