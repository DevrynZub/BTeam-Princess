import { AppState } from "../AppState.js"
import { Princess } from "../models/Princess.js"
import { api } from "./AxiosService.js"


class PrincessService {

  async deletePrincess(princessId) {
    const princessToBeDeleted = AppState.princesses.findIndex(p => p.id == princessId)

    if (princessToBeDeleted == -1) {
      throw new Error('Invalid ID')
    }

    await api.delete(`/api/princesses/${princessId}`)


    AppState.princesses.splice(princessToBeDeleted, 1)

    AppState.emit('princesses')


  }


  async getPrincesses() {

    const res = await api.get('/api/princesses')
    console.log('response', res);
    const princess = res.data.map(p => new Princess(p))
    AppState.princesses = princess

    console.log('get princess appstate', AppState.princesses);
  }

  async createPrincess(formData) {
    const createdPrincess = await api.post('/api/princesses', formData)
    const princess = new Princess(createdPrincess.data)
    AppState.princesses.push(princess)
    AppState.emit('princesses')
  }


  setActivePrincess(princessId) {
    let foundPrincess = AppState.princesses.find(p => p.id == princessId)
    // @ts-ignore
    AppState.activePrincess = foundPrincess
    console.log('[Found princess in application]', AppState.activePrincess);
  }

}

export const princessService = new PrincessService()