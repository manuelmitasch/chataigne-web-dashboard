import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class StringControlModel extends Control {
    @attr("string") value
}
