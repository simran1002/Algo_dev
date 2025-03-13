import mongoose, { Schema, Document, Model } from "mongoose";
import { LogEntry } from "../types/algoTypes";

interface ILogEntry extends Document, LogEntry {}

const logSchema = new Schema<ILogEntry>({
  algorithm: { type: String, required: true },
  input: { type: Schema.Types.Mixed, required: true },
  output: { type: Schema.Types.Mixed, required: true },
  timeComplexity: { type: String, required: true },
  spaceComplexity: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Log: Model<ILogEntry> = mongoose.model<ILogEntry>("Log", logSchema);

export default Log;
