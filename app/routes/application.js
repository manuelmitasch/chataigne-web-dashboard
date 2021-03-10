import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return this.store.findAll('dashboard')
  }

  redirect(model, transition) {
    if (model.length > 0 && transition.targetName != "dashboard") {
      this.transitionTo('dashboard', model.firstObject);
    }
  }
}
