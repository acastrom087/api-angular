export class Task{
    ID:number;
    Title:string;
    Description:string;
    Done:boolean;
    UserId:Number;

    constructor(title:string, description:string, done:boolean, userId:Number){

        this.Title = title;
        this.Description = description;
        this.Done = done;
        this.UserId = userId;
    }
}