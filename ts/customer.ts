export class customer {
         constructor(
           private _emailCustomer: string,
           private _passwordCustomer: string
         ) {}

         get userEmailCustomer(): string {
           return this._emailCustomer;
         }

  set userEmailCustomer(userEmailCustomer) {
    this._emailCustomer = userEmailCustomer;
         }

         get userPasswordCustomer(): string {
           return this._passwordCustomer;
         }

  set userPasswordCustomer(userPasswordCustomer) {
    this._passwordCustomer = userPasswordCustomer;
         }
       }

let usersCustomer: customer[] = [];
let customer1 = new customer('jesus@crehana', 'crehana');

usersCustomer.push(customer1);

export let getcustomer = () => {
return usersCustomer;
};
