import { AppState } from "../AppState.js"
import { Princess } from "../models/Princess.js"
import { api } from "./AxiosService.js"


class PrincessService {
  async createPrincess(formData) {
    const createdPrincess = await api.post('/api/princesses')
    const princess = new Princess(createdPrincess)
    AppState.princess.push(princess)
    AppState.emit('princess')
  }
  async getPrincesses() {
    const princess = await api.get('/api/princesses')
    AppState.princess = princess
  }

}

export const princessService = new PrincessService()