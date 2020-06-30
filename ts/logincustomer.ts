import { customer } from './customer';
import loggedin from './logeedin';

export default (db: customer, formInfo: { emailcustomer: string, passwordcustomer: string }) => {

    if (formInfo.emailcustomer === db.userEmailCustomer) {

        if (formInfo.passwordcustomer === db.userPasswordCustomer) {

            localStorage.setItem('userName', formInfo.emailcustomer);

            loggedin();


        } else {

            return;

        }

    } else {

        return;

    }







}