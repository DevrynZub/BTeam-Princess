import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { commentsService } from "./CommentsService.js"

class PrincessesService {
  async getPrincesses() {
    const princesses = await dbContext.Princesses.find().populate('creator', 'name picture').populate('')
    await princesses
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
    await commentsService.deletePrincessComments()
  }

  async incrementLikes(princessId) {
    // Get the princess document from the database
    const princess = await dbContext.Princesses.findById(princessId);

    if (!princess) {
      throw new Error('Princess not found');
    }

    // Increment the likes count
    princess.likes += 1;

    // Save the updated princess document back to the database
    await princess.save();

    // Return the updated princess data
    return princess;
  }


}

export const princessesService = new PrincessesService()