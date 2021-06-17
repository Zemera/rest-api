
import { mongoosePagination } from "ts-mongoose-pagination";
import { SchemaTypes ,PaginateModel,Schema,  model} from "mongoose";
import { UserType } from "../../../business/enum/UserType";
import { User } from "../interfaces/user.interface";
import * as bcrypt from "bcrypt-nodejs";


 const userSchema =  new Schema(
    {
      fullName: { type: String },
      mobile: { type: String, default: null },
      email: {
        type: String, required: true, unique: true, validate: [
          (val: string) => {
            return isMail(val);
          },
          'Please fill a valid email address'
        ]
      },
      password: { type: String, required: true, uniq: true },
      pic: { type: String, default: "" },
      country: String,
      birthday: Date,
      userType: { type: String, default: UserType.user, enum: ["Admin", "StoreAdmin", "User"] },
      active: { type: Boolean, required: true, default: false },
      provider: { type: String, enum: ["LOCAL", "facebook", "google"], default: "LOCAL" },
      providerData: {
        providerID: String,
        providerToken1: String,
        providerToken2: String,
      },
      token: String,
      deliveryAddress: [
        { type: SchemaTypes.ObjectId, ref: "DeliveryAddress" }
      ],
      changePassword: {
        token: String,
        creationDate: Date
      },
      stores: [{type: SchemaTypes.ObjectId, ref: "Store"}],
      lastLogin: Date,
    },
    {
      timestamps: true
    }
  );
  
  userSchema.methods.comparePassword = (password: string, hash: string): Promise<boolean> => {
    const p: Promise<boolean> = new Promise<boolean>((resolve, reject) => {
      bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) {
          reject(err);
        }
        console.log(isMatch);
        
        resolve(isMatch);
      });
    });
    return p;
  };
  
  userSchema.methods.hashPasswordMethod = (password: string): Promise<string> => {
    let p: Promise<string> = new Promise<string>((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(
          password,
          salt,
          () => { },
          (err, hashedPassword) => {
            if (err) {
              reject(err);
              throw err;
            }
            password = hashedPassword;
            resolve(hashedPassword);
          }
        );
      });
    });
    return p;
  };
  
  userSchema.pre("save", function(next) {
    if (this.isModified("password")) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(
          (<User>this).password,
          salt,
          () => {},
          (err, hashedPassword) => {
            if (err) {
              throw err;
            }
            (<User>this).password = hashedPassword;
            next();
          }
        );
      });
    }
  });
  
  
   export function isMail(value: string): boolean {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(value);
  }
userSchema.plugin(mongoosePagination);

export const UserPaginate: PaginateModel<User> = model("User", userSchema);
export {userSchema} ;