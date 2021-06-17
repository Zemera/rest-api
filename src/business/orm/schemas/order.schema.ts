import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    orderDate: Date,
    orderSum: Number,
    source: { type: String, enum: ["HASHVE_OLD", "HASHVE"] },
})