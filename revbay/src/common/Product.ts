import User from "./User.ts"

export default interface Product{
    productId:number,
    name:string,
    category:Category,
    user:User,
    quantity:number,
    price:number
}

enum Category{
    "ELECTRONICS",
    "CLOTHING",
    "GENERAL",
    "TOYS",
    "HOME",
    "BOOKS"
}