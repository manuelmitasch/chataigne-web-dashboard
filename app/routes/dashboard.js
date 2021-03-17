import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
    @service('settings') settings

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
}
