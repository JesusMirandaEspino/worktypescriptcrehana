import { agent } from './agent';
import loggedin from './logeedin';

export default (db: agent, formInfo: { idagent: string, passwordagent: string }) => {

    if (formInfo.idagent === db.useridagent) {

        if (formInfo.passwordagent === db.userpasswordagent) {

            localStorage.setItem('userName', formInfo.idagent);

            loggedin();


        } else {

            return;

        }

    } else {

        return;

    }






    
}