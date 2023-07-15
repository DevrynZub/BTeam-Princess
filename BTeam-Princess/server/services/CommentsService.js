import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService {

  async getComments() {
    const comments = await dbContext.Comments.find().populate('creator', 'name picture')
    return comments
  }

  async getCommentsByPrincessId(princessId) {
    const foundComments = await dbContext.Comments.find({ princessId }).populate('comments', "name body")
  }
  async createComment(commentData) {
    const createdComment = await dbContext.Comments.create(commentData)
    await createdComment.populate('Princess', 'name body')
    await createdComment.populate('creator', 'picture name')
    return createdComment
  }

  async deletePrincessComments(princessId, userId) {
    // const commentsToDelete = await dbContext.Comments.find({ princessId }).populate('creator', 'creatorId')

    // if (commentsToDelete.creatorId.toString() != userId) {
    //   throw new Forbidden('Not allowed sir!')
    // }
    // await commentsToDelete.remove()

    await dbContext.Comments.deleteMany({ princessId })
  }
}



export const commentsService = new CommentsService()