import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class TriggerControlModel extends Control {
    @attr("boolean") triggered

    init() {
        super.init();
        this.addObserver('triggered', this, 'disableTriggered');
    }

    disableTriggered() {
        Ember.run.later(this, () => {
            this.triggered = false;
        }, 100);
    }

}
