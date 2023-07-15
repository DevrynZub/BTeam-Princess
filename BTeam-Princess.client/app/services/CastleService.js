import { AppState } from "../AppState.js";
import { Castle } from "../models/Castle.js";
import { api } from "./AxiosService.js"


class CastleService {
  async getCastles() {
    const res = await api.get('api/castles')
    console.log('my castles', res.data);
    const castles = res.data.map(c => new Castle(c))
    AppState.castles = castles

  }

}


export const castleService = new CastleService()