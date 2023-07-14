import { AppState } from "../AppState.js"
import { Princess } from "../models/Princess.js"
import { api } from "./AxiosService.js"


class PrincessService {


  async getPrincesses() {
    const res = await api.get('/api/princesses')
    console.log('response', res);
    const princess = res.data.map(p => new Princess(p))
    AppState.princesses = princess

    console.log('get princess appstate', AppState.princesses);
  }

  async createPrincess(formData) {
    const createdPrincess = await api.post('/api/princesses')
    const princess = new Princess(createdPrincess)
    AppState.princesses.push(princess)
    AppState.emit('princess')
  }


  setActivePrincess(princessId) {
    let foundPrincess = AppState.princesses.find(p => p.Id == princessId)
    AppState.princesses = foundPrincess
    console.log('[Found princess in application]', AppState.princesses);
  }

}

export const princessService = new PrincessService()