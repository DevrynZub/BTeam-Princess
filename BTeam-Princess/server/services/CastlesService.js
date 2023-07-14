import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CastlesService {
  async getCastles() {
    const castles = await dbContext.castles.find()
    return castles
  }

  async createCastle(castleData) {
    const createdCastle = await dbContext.castles.create(castleData)
    return createdCastle
  }

  async removeCastle(castleId) {
    const castleToDelete = await this.getCastlesById(castleId)
    if (!castleToDelete) {
      throw new BadRequest('No Castle to Delete')
    }
    await castleToDelete.remove()
  }

  async getCastlesById(castleId) {
    const castle = await dbContext.castles.findById(castleId)
    if (!castle) {
      throw new BadRequest('No Dice, Ya Homeless!')
    }
    return castle
  }
}
export const castlesService = new CastlesService()