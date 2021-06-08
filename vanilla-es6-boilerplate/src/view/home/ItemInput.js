
export class ItemInput {

    constructor({$target}) {
        this.$target = $target;
        this.input = document.createElement('input');
        this.input.className = 'item-input'
    }

    render() {
        this.$target.appendChild(this.input);
    }

    get value() {
        return this.input.value;
    }

    set value(value) {
        this.input.value = value;
    }

    focus() {
        this.input.focus();
    }
}
