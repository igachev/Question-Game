
export class User {
     email!:string;
    private _token!: string;
    private expireDate!: Date;

    constructor(email: string,_token: string,expireDate: Date) {
        this.email = email;
        this._token = _token;
        this.expireDate = expireDate;
    }

    get token(): string | false {
        if(new Date() > this.expireDate) {
            return false;
        }
        return this._token
    }

}