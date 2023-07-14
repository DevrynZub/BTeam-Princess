import { castlesService } from "../services/CastlesService.js";
import BaseController from "../utils/BaseController.js";

export class CastlesController extends BaseController {
  constructor() {
    super('api/castles')
    this.router
      .get('', this.getCastles)
      .get('/:castleid', this.getCastles)
      .post('', this.createCastle)
      .delete('/:castleId', this.removeCastle)
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
      const castleData = req.body
      const createdCastle = await castlesService.createCastle(castleData)
      return res.send(createdCastle)
    } catch (error) {
      next(error)

    }
  }
  async removeCastle(req, res, next) {
    try {
      const castleId = req.params.castleId
      await castlesService.removeCastle(castleId)
      res.send('Castle is now a farm')
    } catch (error) {
    }
  }

  async getCastlesById(req, res, next) {
    try {
      const castleId = req.params.castleId
      const newCastle = await castlesService.getCastlesById(castleId)
      res.send(newCastle)
    } catch (error) {
      next(error)

    }
  }
}