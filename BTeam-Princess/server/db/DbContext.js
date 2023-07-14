import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PrincessSchema } from "../models/PrincessModel.js";
import { CastleSchema } from "../models/CastleModel.js";
import { CommentSchema } from "../models/Comment.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Princesses = mongoose.model('Princess', PrincessSchema);
  castles = mongoose.model('Castle', CastleSchema)
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
