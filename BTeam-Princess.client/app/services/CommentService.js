import { AppState } from "../AppState.js";
import { Comment } from "../models/Comment.js";
import { api } from "./AxiosService.js";




class CommentService {
  async createComment(formData) {
    const res = await api.post('api/comments', formData)
    console.log('creating comment', res.data);

    const newComment = new Comment(res.data)




  }
  async getCommentsByActivePrincess() {
    // @ts-ignore
    // debugger
    const activePrincess = AppState.activePrincess
    const res = await api.get(`api/princesses/${activePrincess.id}/comments`)
    console.log(res);
    // const comments = res.data.map(c => new Comment(c))
    // AppState.comments = comments
  }
  async getComments() {
    // debugger
    const res = await api.get('api/comments')
    console.log('my comments', res.data);
    const comments = res.data.map(c => new Comment(c))
    AppState.comments = comments

  }



}


export const commentService = new CommentService()