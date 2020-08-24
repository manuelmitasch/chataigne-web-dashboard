import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';

export default class DashboardModel extends Model {
    @attr('string') name

    @attr('number') width
    @attr('number') height
    
    @hasMany('control', { polymorphic: true }) controls

    controlSorting = ['positionY', 'positionX']
    @sort('controls', 'controlSorting') sortedControls
}
