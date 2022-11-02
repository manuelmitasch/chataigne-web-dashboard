import Model, { attr, belongsTo } from '@ember-data/model';
import TriggerControl from './control';

export default class LinkModel extends TriggerControl {
    @attr("string") target
    @attr("boolean") setInClients
    @attr("boolean") setInNative
}
