import { AppState } from "../AppState.js";
import { princessService } from "../services/PrincessService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawPrincesses() {
  let princesses = AppState.princesses
  console.log('draw princesses', princesses);
  let template = ''
  princesses.forEach(p => template += p.PrincessTemplate)

  setHTML('princess', template)

}

function _drawActivePrincess() {
  let activePrincess = AppState.activePrincess
  console.log('activePrincess', activePrincess);

  // @ts-ignore
  setHTML('activePrincess', activePrincess.ActivePrincessTemplate)
}



export class PrincessController {
  constructor() {
    // console.log('this is my Princess Controller');
    AppState.on('account', this.getPrincesses)
    AppState.on('princesses', _drawPrincesses)
    AppState.on('activePrincess', _drawActivePrincess)
  }

  async getPrincesses() {
    try {
      await princessService.getPrincesses()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
  async createPrincess(event) {
    try {
      event.preventDefault
      const form = event.target
      const formData = getFormData(form)
      await princessService.createPrincess(formData)
      form.reset()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  setActivePrincess(princessId) {
    try {
      princessService.setActivePrincess(princessId)
    } catch (error) {
      Pop.error(error.message)
    }
  }

}