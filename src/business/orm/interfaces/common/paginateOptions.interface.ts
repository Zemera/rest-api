export interface PaginateOptions {
    select?:any|string ,
    sort?:any|string ,
    populate?:any|string ,
    lean:boolean,
    page:number,
    perPage:number,
    skip:number
    offset?:number,
    limit:number
}