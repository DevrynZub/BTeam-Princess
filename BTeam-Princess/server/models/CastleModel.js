import { Schema } from "mongoose";

export const CastleSchema = new Schema({
  location: { type: String, required: true },
  climate: { type: String, required: true },
  typeOfCastle: { type: String, enum: ['Sand Castle', 'Snow Castle', 'Aquatic Castle', 'Cottage', 'Stone Castle', 'Cave'] }
}, {
  timestamps: true, toJSON: { virtuals: true }
})
