export class agent {
         constructor(
           private _idAgent: string,
           private _passwordAgent: string
         ) {}

         get useridagent(): string {
           return this._idAgent;
         }

        set useridagent(useridagent) {
          this._idAgent = useridagent;
         }

         get userpasswordagent():string{
            return this._passwordAgent;
         }

        set userpasswordagent(userpasswordagent){
          this._passwordAgent = userpasswordagent;
         }

}


let usersAgents:agent[] = [];
let agent1 = new agent( 'slan48', 'crehana' );

usersAgents.push(agent1);

export let getagent = () => {
    return usersAgents
}
