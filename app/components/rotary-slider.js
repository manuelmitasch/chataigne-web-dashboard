import RangeSlider from './range-slider';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class RotarySliderComponent extends RangeSlider {
    get arcData() {
        let w = this.width;
        let h = this.height;
        let radius = (w>h) ? h/2 : w/2;
        radius = radius - h/2*0.2;
        let centerY = h/2 + radius*0.15;

        let endAngle = this.remapValue(this.args.value, this.args.min, this.args.max, -125, 125);

        return this.describeArc(w/2, centerY, radius, -125, endAngle);
    }

    get arcDataBg() {
        let w = this.width;
        let h = this.height;
        let radius = (w>h) ? h/2 : w/2;
        radius = radius - h/2*0.2;
        let centerY = h/2 + radius*0.15;

        return this.describeArc(w/2, centerY, radius, -125, 125);
    }

    get arcDataBorder() {
        let w = this.width;
        let h = this.height;
        let radius = (w>h) ? h/2 : w/2;
        radius = radius - h/2*0.2;
        let centerY = h/2 + radius*0.15;

        return this.describeArc(w/2, centerY, radius, -126, 126);
    }

    get strokeWidth() {
        let w = this.width;
        let h = this.height;
        let min = (w>h) ? h : w;

        return min*0.15;
    }

    get strokeWidth2() {
        return this.strokeWidth + 2;
    }

    get arcCenterY() {
        let w = this.width;
        let h = this.height;
        let min = (w>h) ? h : w;
        let radius = min/2;

        return radius - radius * 0.2
    }

    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    describeArc(x, y, radius, startAngle, endAngle) {
        var start = this.polarToCartesian(x, y, radius, endAngle);
        var end = this.polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");

        return d;
    }

    get fontStyles() {
        let w = this.width;
        let h = this.height;
        let min = (w>h) ? h : w;

        let fontSize = 18;
    
        if (min <= 100) {
          fontSize = 9;
        } else if (min <= 200) {
          fontSize = 13;
        } else {
          fontSize = 18;
        } 
    
        let styles = {
          fontSize: fontSize + "px",
        };
    
        return styles;
    }

    get containerStyles() {
        let styles = super.containerStyles;
        styles.width = this.width + "px";
        styles.height = this.height +"px";
        styles.background = "none";

        return styles;
    }

    get width() {
        return (this.settings.displayLayout) ? this.args.width : 125;
    }

    get height() {
        return (this.settings.displayLayout) ? this.args.height : 125;
    }
}
