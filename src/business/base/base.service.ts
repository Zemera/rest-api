import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Types, PaginateModel } from 'mongoose';
import { PaginateOptions } from '../orm/interfaces/common/paginateOptions.interface';

@Injectable()
export class BaseService<T> {
  protected _model: any;
  protected paginateModel: PaginateModel<any>;
  protected optionPaginate: PaginateOptions;

  constructor(schemaModel: Model<any>, paginateModel?: PaginateModel<any>) {
    this._model = schemaModel;
    this.paginateModel = paginateModel;

    const page = 1;
    const limit = 10;

    // default  setting for pagination
    this.optionPaginate = {
      lean: true,
      page,
      perPage: 10,
      skip: (page - 1) * limit,
      limit,
    };
  }

  create(item: T): Promise<T> {
    const newItem = new this._model(item);
    return newItem.save();
  }

  retrieve(): Promise<Array<T>> {
    return this._model.find({});
  }

  update(_id: string, item: T): Promise<T> {
    return this._model.updateOne({ _id: _id }, item).then((result: any) => {
      if (result.ok === 1) {
        return this._model.findById(_id);
      } else {
        return result;
      }
    });
  }

  delete(_id: string): Promise<T> {
    return this._model
      .remove({ _id: this.toObjectId(_id) })
      .then((result: any) => {
        return result;
      });
  }

  findById(_id: string): Promise<T> {
    return this._model.findById(this.toObjectId(_id));
  }

  protected toObjectId(_id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(_id);
  }

  retriveWithPaginate(): Promise<any> {
    return this.paginateModel.paginate({}, this.optionPaginate);
  }

  // public  paginate(query, options, callback):Promise<T>{
  //     query = query || {};
  //     options = Object.assign({}, paginate.options, options);
  //     let select = options.select;
  //     let sort = options.sort;
  //     let populate = options.populate;
  //     let lean = options.lean || false;
  //     let leanWithId = options.leanWithId ? options.leanWithId : true;
  //     let limit = options.limit ? options.limit : 10;
  //     let page, offset, skip, promises;
  //     if (options.offset) {
  //       offset = options.offset;
  //       skip = offset;
  //     } else if (options.page) {
  //       page = options.page;
  //       skip = (page - 1) * limit;
  //     } else {
  //       page = 1;
  //       offset = 0;
  //       skip = offset;
  //     }
  //     if (limit) {
  //       let docsQuery = this.find(query)
  //         .select(select)
  //         .sort(sort)
  //         .skip(skip)
  //         .limit(limit)
  //         .lean(lean);
  //       if (populate) {
  //         [].concat(populate).forEach((item) => {
  //           docsQuery.populate(item);
  //         });
  //       }
  //       promises = {
  //         docs: docsQuery.exec(),
  //         count: this.count(query).exec()
  //       };
  //       if (lean && leanWithId) {
  //         promises.docs = promises.docs.then((docs) => {
  //           docs.forEach((doc) => {
  //             doc.id = String(doc._id);
  //           });
  //           return docs;
  //         });
  //       }
  //     }
  //     promises = Object.keys(promises).map((x) => promises[x]);
  //     return Promise.all(promises).then((data) => {
  //       let result = {
  //         docs: data.docs,
  //         total: data.count,
  //         limit: limit
  //       };
  //       if (offset !== undefined) {
  //         result.offset = offset;
  //       }
  //       if (page !== undefined) {
  //         result.page = page;
  //         result.pages = Math.ceil(data.count / limit) || 1;
  //       }
  //       if (typeof callback === 'function') {
  //         return callback(null, result);
  //       }
  //       let promise = new Promise();
  //       promise.resolve(result);
  //       return promise;
  //     });
  //   }
}
