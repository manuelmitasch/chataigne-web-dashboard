import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class BooleanControlModel extends Control {
    @attr("string") value
    @attr() options
}
