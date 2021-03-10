import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';
import Control from './control';

export default class GroupModel extends Control {
    @attr() backgroundColor
    @attr() borderColor
    @attr('number') borderWidth
    
    @hasMany('control', { polymorphic: true }) controls

    controlSorting = ['positionY', 'positionX']
    @sort('controls', 'controlSorting') sortedControls
}
