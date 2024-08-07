export default interface User{
    userID:number,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    userType:userType
}

enum userType{
    "BUYER",
    "SELLER"
}