// this class determine the type "users" 


export class UsersObj {

    public UserObjName:string="";
    public UserObjUserId:number=0;
    public UserObjEmail:string="";
    public UserObjCity :string="";

    constructor(_userId:number,_name:string,_email:string,_city:string){
        this.UserObjName= _name;
        this.UserObjUserId = _userId;
        this.UserObjEmail = _email;
        this.UserObjCity = _city;
    }
}
