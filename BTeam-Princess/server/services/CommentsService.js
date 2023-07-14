import { dbContext } from "../db/DbContext.js"

class CommentsService {

  async getComments() {
    const comments = await dbContext.Comments.find().populate('creator', 'name picture')
    return comments
  }

  async getCommentsByPrincessId(princessId) {
    const comments = await dbContext.Comments.find({ princessId }).populate('comments', 'name body')
  }
  async createComment(commentData) {
    const createdComment = await dbContext.Comments.create(commentData)
    await createdComment.populate('Princess', 'name body')
    await createdComment.populate('creator', 'picture name')
    return createdComment
  }
}



export const commentsService = new CommentsService()