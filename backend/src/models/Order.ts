import { Schema, model } from 'mongoose';
import { IOrder } from '../interfaces/interfaces';

const OrderSchema = new Schema<IOrder>({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  amount: { type: Number, required: true },
  items: [String],
  orderDate: { type: Date, required: true },
}, { timestamps: true });

export default model<IOrder>('Order', OrderSchema);
