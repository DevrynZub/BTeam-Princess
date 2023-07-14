import { Schema } from "mongoose";
import { CommentSchema } from "./Comment.js";

export const PrincessSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  hasHighHeels: { type: Boolean, default: true },
  hairColor: { type: String, maxlength: 30 },
  imgUrl: { type: String, required: true, maxlength: 1000 },
  likes: { type: Number },
  description: { type: String, maxlength: 250 },
  creatorId: { type: Schema.Types.ObjectId, required: true },
  castleId: { type: Schema.Types.ObjectId, required: true, },
},
  { timestamps: true, toJSON: { virtuals: true } })

PrincessSchema.virtual('Castle', {
  localField: 'castleId',
  foreignField: '_id',
  justOne: true,
  ref: 'Castle'
})
PrincessSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account'
})

