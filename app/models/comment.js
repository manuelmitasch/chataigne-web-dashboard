import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class CommentModel extends Control {
    @attr("string") text
    @attr("number") size

    @attr("number") backgroundAlpha
    @attr() color
}
