export class User{
     ID:number;
     FirstName:string;
     LastName:string;
     Email:string;
     Password:string

     
     constructor(firstName:string,lastName:string,email:string, password:string){
        this.FirstName=firstName;
        this.LastName=lastName;
        this.Email=email;
        this.Password=password;
     }
     
     

}