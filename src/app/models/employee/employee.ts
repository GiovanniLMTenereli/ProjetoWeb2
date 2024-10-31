export interface Employee {
    id: number;
    name: string;
    position: string;
    // Adicione a propriedade `userType`:
    userType: 'customer' | 'employee';
  }

export class Employee {

    constructor(
        public id : number,
        public email : string,
        private _password : string,
        public name : string,
        public birthDate : string,
    ){}

    get password() : string{
        return this._password;
    }

    set password(password){
        this._password = password;
    }
}