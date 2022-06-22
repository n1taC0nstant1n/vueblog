export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    fname: string,
    lname: string,
    email:string,
    password?:string
  }
  