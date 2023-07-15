import { AppState } from "../AppState.js"
import { commentService } from "../services/CommentService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


function _drawComments() {

}

export class CommentController {
  constructor() {
    // console.log('this is my Comment Controller');
    this.getComments()
    AppState.on('activePrincess', this.getCommentsByActivePrincess)
    AppState.on('comments', _drawComments)
  }

  async getComments() {
    try {
      await commentService.getComments()
    } catch (error) {
      Pop.error(error.message)
    }
  }
  async getCommentsByActivePrincess() {
    try {
      await commentService.getCommentsByActivePrincess()

    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
  async createComment(event) {
    event.preventDefault()
    const form = event.target
    let formData = getFormData(form)
    await commentService.createComment(formData)

  }



}