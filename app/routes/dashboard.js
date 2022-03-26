import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DashboardRoute extends Route {
    @service('settings') settings

    beforeModel(transition) {
      if (!this.settings.unlocked) {
        let pwdController = this.controllerFor('password');
        pwdController.previousTransition = transition;
        this.transitionTo('password');
      } 
    }

    model(params) {
      return this.store.peekRecord('dashboard', params.dashboard_id)
    }
  
    afterModel(model, transition) {
      if (model == null) {
        let firstDashboard = this.store.peekAll('dashboard').firstObject;
        this.transitionTo('dashboard', firstDashboard);
      } else {
        let scaleWidth = this.settings.viewWidth / (model.width);
        let scaleHeight = (this.settings.viewHeight) / (model.height);
        
        let scale = (scaleWidth > scaleHeight) ? scaleHeight : scaleWidth;
        this.settings.dashboardScale = scale;
      }
    }

    @action
    willTransition(transition) {
      let currentDashboard = this.get('controller.model');
      let password = currentDashboard.password;
      let unlocked = currentDashboard.unlocked;
      let unlockOnce = currentDashboard.unlockOnce;

      if (password && password != '' && unlocked && !unlockOnce) {
          this.set('controller.model.passwordEntered', ''); 
      }
  }
}
