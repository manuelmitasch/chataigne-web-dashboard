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

  get showLabel() {
    if (!this.settings.displayLayout) return true;
    if (!this.args.control.showLabel) return false;
    return (this.args.control.isColorIndicator && !this.args.control.isRotarySlider) || !this.args.control.hasRange;
  }
}
