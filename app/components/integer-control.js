import FloatControlComponent from './float-control';
import { action } from '@ember/object';

export default class IntegerControlComponent extends FloatControlComponent {
  get step() {
    return 1;
  }

  get roundedValue() {
    return parseInt(this.args.control.value);
  }

  @action
  setValue(value) {
    this.args.control.value = Math.round(value);
  }
}
