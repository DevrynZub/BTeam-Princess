import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class PrincessesService {
  async getPrincesses() {
    const princesses = await dbContext.Princesses.find()
    return princesses
  }

  async getPrincessById(princessId) {
    const princess = await dbContext.Princesses.findById(princessId)
    if (!princess) {
      throw new BadRequest('She aint home bud')
    }
    return princess
  }

  async createPrincess(princessData) {
    const createdPrincess = await dbContext.Princesses.create(princessData)
    return createdPrincess
  }

  async removePrincess(princessId, userId) {
    const princessToRemove = await this.getPrincessById(princessId)
    if (princessToRemove.creatorId.toString() != userId) {
      throw new Forbidden('Hey, you cant do that!')
    }
    await princessToRemove.remove()
  }
}

export const princessesService = new PrincessesService()