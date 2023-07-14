import { AppState } from "../AppState.js";
import { princessService } from "../services/PrincessService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop";
import { setHTML } from "../utils/Writer.js";


function _drawPrincesses() {
  const princesses = AppState.princess
  let template = ''
  princesses.forEach(p => template += p.PrincessTemplate)

  setHTML('princess', template)
}



export class PrincessController {
  constructor() {
    console.log('this is my Princess Controller');
    AppState.on('princess', _drawPrincesses)
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

}