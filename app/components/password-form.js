import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PasswordFormComponent extends Component {
    @action
    passwordUpdated(event) {
        let pwdInput = event.srcElement.form[0];
        let pwd = pwdInput.value;

        this.args.dashboard.passwordEntered = pwd;

        if (!this.args.dashboard.unlocked) {
            pwdInput.classList.add("bounce");

            setTimeout(function() {
                pwdInput.classList.remove("bounce");
                pwdInput.value = "";
                pwdInput.focus();
            }, 1000);
        } else {
            console.log("unlocked!");
            let retryTransition = this.args.retryTransition;
            if (retryTransition) retryTransition.retry();
        }
    }
}