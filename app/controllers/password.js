import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PasswordController extends Controller {
    @service('settings') settings
    
    previousTransition = null
}
