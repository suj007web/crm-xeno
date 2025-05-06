import { Types } from 'mongoose';

export type LogicType = 'AND' | 'OR';
export type DeliveryStatus = 'success' | 'failed';
export type CampaignStatus = 'draft' | 'sent' | 'error';

export interface Condition {
  field: string;
  op: string;
  value: any;
}

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  avatarUrl?: string;
  provider: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICustomer {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOrder {
  _id?: Types.ObjectId;
  customerId: Types.ObjectId;
  amount: number;
  items?: string[];
  orderDate: Date;
  createdAt?: Date;
}

export interface ISegmentRule {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  logicType: LogicType;
  conditions: Condition[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICampaign {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  name: string;
  message: string;
  intent?: string;
  ruleId: Types.ObjectId;
  status: CampaignStatus;
  sentAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeliveryLog {
  _id?: Types.ObjectId;
  campaignId: Types.ObjectId;
  customerId: Types.ObjectId;
  status: DeliveryStatus;
  errorMessage?: string;
  sentAt: Date;
}

export interface IAIAuditLog {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  type: 'message-generator' | 'parser';
  input: string;
  output: string;
  createdAt?: Date;
}
