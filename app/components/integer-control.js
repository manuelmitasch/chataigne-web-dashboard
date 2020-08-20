import FloatControlComponent from './float-control';

export default class IntegerControlComponent extends FloatControlComponent {
  get step() {
    return 1;
  }

  get roundedValue() {
    return parseInt(this.args.control.value);
  }
}
