import { Schema, model } from 'mongoose';
import { ICustomer } from '../interfaces/interfaces';

const CustomerSchema = new Schema<ICustomer>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  location: String,
}, { timestamps: true });

export default model<ICustomer>('Customer', CustomerSchema);
