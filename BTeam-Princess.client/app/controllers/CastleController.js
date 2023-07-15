import { AppState } from "../AppState.js";
import { castleService } from "../services/CastleService.js";
import { Pop } from "../utils/Pop.js";




export class CastleController {
  constructor() {
    // console.log('this is my Castle Controller');
    this.getCastles()

  }

  async getCastles() {
    try {
      await castleService.getCastles()
    } catch (error) {
      Pop.error(error.message)
    }
  }

}


