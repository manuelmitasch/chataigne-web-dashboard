import TriggerControlComponent from './trigger-control';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LinkControlComponent extends TriggerControlComponent {  
  @service router

  @action
  update(value, event) {
    const control = this.args.control;
    let dashboardName = control.target;

    if (dashboardName && control.setInClients) {
      this.socket.send({"setDashboard": dashboardName});
    }

    event = (event) ? event : value;
    event.preventDefault();

    this.router.transitionTo('dashboard', dashboardName);
  }
}
