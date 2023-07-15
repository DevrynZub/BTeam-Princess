import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  body: { type: String, required: true, minlength: 1, maxlength: 150 },
  princessId: { type: Schema.Types.ObjectId, required: true, },
  creatorId: { type: Schema.Types.ObjectId, required: true, },
}, { timestamps: true, toJSON: { virtuals: true } })

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account'
})
CommentSchema.virtual('Princess', {
  localField: 'princessId',
  foreignField: '_id',
  ref: 'Princess'
})