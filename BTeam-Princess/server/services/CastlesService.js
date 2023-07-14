import { dbContext } from "../db/DbContext.js"

class CastlesService {
  async getCastles() {
    const castles = await dbContext.castles.find()
    return castles
  }

}
export const castlesService = new CastlesService()