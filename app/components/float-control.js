import ControlComponent from './control';
import { action } from '@ember/object';

export default class FloatControlComponent extends ControlComponent {
  get roundedValue() {
    let rounded = Number.parseFloat(this.args.control.value).toFixed(3);
    return parseFloat(rounded);
  }

  @action
  input(type, event) {
    const control = this.args.control;
    
    if (type == "time") {
      let time = event.target.value;
      time = time.split(".");
      let ms = time.length > 1 ? time[1] : "0";
      if (ms.length < 2) {
        ms = parseInt(ms + "00");
      } else if (ms.length < 3) {
        ms = parseInt(ms + "0");
      } else {
        ms = parseInt(ms);
      }

      time = time[0].split(":");
      
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (time.length > 2) {
        hours = time[0] ? parseInt(time[0]) : 0;
        minutes = time[1] ? parseInt(time[1]) : 0;
        seconds = time[2] ? parseInt(time[2]) : 0;
      } else if (time.length == 2) {
        minutes = time[0] ? parseInt(time[0]) : 0;
        seconds = time[1] ? parseInt(time[1]) : 0;
      } else if (time.length == 1) {
        seconds = time[0] ? parseInt(time[0]) : 0;
      }
      const result = hours*60*60 + minutes*60 + seconds + ms/1000;
      control.value = result;
    } else {
      event = type;

      if (control.modelName == "integer-control") {
        control.value = Math.round(event.target.value);
      } else {
        control.value = event.target.value;
      }
    }
  }

  @action 
  setValue(value) {
    super.setValue(value);
    this.args.control.isEditing = true;
  }

  @action
  update(type, event) {
    const control = this.args.control;

    if (control.value < control.minVal) {
      control.value = control.minVal;
    } else if (control.value > control.maxVal) {
      control.value = control.maxVal;
    }

    this.socket.sendFeedback(control.controlAddress, control.value);
    // control.save();
  }

  @action
  increment() {
    const control = this.args.control;

    if (control.value == parseInt(control.value)) {
      control.value = control.value + 1;
    } else {
      control.value = Math.ceil(control.value);
    }

    this.update();
  }

  @action
  decrement() {
    const control = this.args.control;

    if (control.value == parseInt(control.value)) {
      control.value = control.value - 1;
    } else {
      control.value = Math.floor(control.value);
    }

    this.update();
  }
  
  get time() {
    const control = this.args.control;
    let hours = Math.floor(control.value / 60 / 60);
    let minutes = Math.floor(control.value / 60 - hours * 60);
    let seconds = Math.floor(control.value - hours * 60 * 60 - minutes * 60);
    let ms = (control.value - hours*60*60 - minutes*60 - seconds) * 1000;
    ms = parseInt(Math.round(ms));
    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

    if (ms < 10) {
      ms = "00" + ms;
    } else if (ms < 100) {
      ms = "0" + ms;
    }
 
    return hours + ":" + minutes + ":" + seconds + "." + ms;
  }

  get customizeStyles() {
    let control = this.args.control;
    let styles = {
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
    };

    return styles;
  }

  get fgColorRgba() {
    if (this.args.control.fgColor) return this.args.control.fgColorRgba;
    if (this.args.control.readOnly) return "#18b5ef";
    return "#7eb357";
  }

  get bgColorRgba() {
      if (this.args.control.bgColor) return this.args.control.bgColorRgba;
      return "#222222";
  }

  get showLabel() {
    return !this.args.control.isRotarySlider;
  }
}
