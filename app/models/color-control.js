import Model, { attr, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';
import Control from './control';

export default class ColorControlModel extends Control {
    @attr("number") red
    @attr("number") green
    @attr("number") blue
    @attr("number") alpha

    @computed('red', 'green', 'blue', 'alpha')
    get rgba() {
        const red = parseInt(this.red * 255);
        const green = parseInt(this.green * 255);
        const blue = parseInt(this.blue * 255);
        const alpha = this.alpha;

        return "rgba(" + red + "," + green + "," + blue + "," + alpha +  ")";
    }

    @computed('red', 'green', 'blue', 'alpha')
    get hex() {
        let red = Math.round(this.red * 255).toString(16);
        let green = Math.round(this.green * 255).toString(16);
        let blue = Math.round(this.blue * 255).toString(16);

        if (red.length == 1)
            red = "0" + red;
        if (green.length == 1)
            green = "0" + green;
        if (blue.length == 1)
            blue = "0" + blue;

        return "#" + red + green + blue;
    }
}
