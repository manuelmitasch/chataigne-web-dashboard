import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
    model(params) {
      return this.store.peekRecord('dashboard', params.dashboard_id)
    }
  
    afterModel(model, transition) {
      if (model == null) {
        let firstDashboard = this.store.peekAll('dashboard').firstObject;
        this.transitionTo('dashboard', firstDashboard);
      }
    }
}
