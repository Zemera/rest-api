import { model } from "mongoose";
import { PaginateModel, Schema, SchemaTypes } from "mongoose";
import { StatusType } from "src/business/enum/StatusType";
import { Invoice } from "../../interfaces/invoice/invoice.interface";

const invoiceSchema = new Schema({
    from: Date,
    to: Date,
    totalSum: Number,
    incommingSum: Number,
    outcommingSum: Number,
    cmscommission: Number,
    status: { type: String, enum: [StatusType.NewOrder, StatusType.Payed, StatusType.Closed, StatusType.Canceled] },
    additional: Number,
    adminApprove: Boolean,
    userApprove: Boolean,
    user: { type: SchemaTypes.ObjectId, ref: 'User' },
    draft: Boolean,
    notes: String,
    incommingOrders: [{
        type: SchemaTypes.ObjectId, ref: 'TransfertOrders'
    }],
    outcommingOrders: [{
        type: SchemaTypes.ObjectId, ref: 'TransfertOrders'
    }]
}, { timestamps: true })

export const InvoicePaginate: PaginateModel<Invoice> = model("Invoice", invoiceSchema);
export {invoiceSchema} ;