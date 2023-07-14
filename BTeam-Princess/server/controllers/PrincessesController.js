// import { Auth0Provider } from "@  /auth0provider";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { princessesService } from "../services/PrincessesService.js";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";

export class PrincessesController extends BaseController {
  constructor() {
    super('api/princesses')
    this.router
      .get('', this.getPrincesses)
      .get('/:princessId', this.getPrincessById)
      .get('/:princessId/comments', this.getCommentsByPrincessId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPrincess)
      .delete('/:princessId', this.removePrincess)
  }

  async getPrincesses(req, res, next) {
    try {
      const princesses = await princessesService.getPrincesses()
      return res.send(princesses)
    } catch (error) {
      next(error)
    }
  }

  async getPrincessById(req, res, next) {
    try {
      const princessId = req.params.princessId
      const princess = await princessesService.getPrincessById(princessId)
      res.send(princess)
    } catch (error) {
      next(error)
    }
  }

  async createPrincess(req, res, next) {
    try {
      const princessData = req.body
      princessData.creatorId = req.userInfo.id
      const createdPrincess = await princessesService.createPrincess(princessData)
      return res.send(createdPrincess)
    } catch (error) {
      next(error)
    }
  }

  async removePrincess(req, res, next) {
    try {
      const princessId = req.params.princessId
      const userId = req.userInfo.id
      await princessesService.removePrincess(princessId, userId)
      res.send('She went to the farm')
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByPrincessId(req, res, next) {
    try {
      const princessId = req.params.princessId
      const comment = await commentsService.getCommentsByPrincessId(princessId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}