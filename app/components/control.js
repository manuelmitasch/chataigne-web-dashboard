import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ControlComponent extends Component {
  @service('chataigne-websocket') socket
  @service('settings') settings

  @action
  input(event) {
    const control = this.args.control;
    control.value = event.target.value;
  }

  @action
  update(event) {
    const control = this.args.control;
    this.socket.sendFeedback(control.controlAddress, control.value);
    // control.save();
  }

  @action
  setValue(value) {
    this.args.control.value = value;
  }

  @action
  onFinishEditing(event) {
    this.args.control.isEditing = false;
  }

  @action
  clickPopover(event) {
      event.stopPropagation();
  }

  get hasSmallHeight() {
    return this.args.control.height < 36;
  }
}
