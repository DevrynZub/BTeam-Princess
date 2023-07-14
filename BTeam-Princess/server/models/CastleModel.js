import { Schema } from "mongoose";

export const CastleSchema = new Schema({
  location: { type: String, required: true, maxlength: 25 },
  climate: { type: String, required: true, maxlength: 25 },
  typeOfCastle: { type: String, enum: ['Sand Castle', 'Ice Castle', 'Aquatic Castle', 'Cottage', 'Stone Castle', 'Cave'] }
}, {
  timestamps: true, toJSON: { virtuals: true }
})
