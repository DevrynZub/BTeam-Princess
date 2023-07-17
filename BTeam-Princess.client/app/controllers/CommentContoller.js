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
  async createComment(req, res, next) {
    try {
      const commentData = req.body;
      // Save the comment data to the database
      const createdComment = await commentService.createComment(commentData);
      res.status(201).send(createdComment);
    } catch (error) {
      next(error);
    }
  }
}





export const commentsController = new CommentController()